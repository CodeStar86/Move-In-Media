import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-7930e57f/health", (c) => {
  return c.json({ status: "ok" });
});

// Enquiries endpoint - for contact form and audit requests
app.post("/make-server-7930e57f/enquiries", async (c) => {
  try {
    const body = await c.req.json();
    
    // Validate required fields
    if (!body.type || !body.contactName || !body.email) {
      return c.json({ error: "Missing required fields: type, contactName, email" }, 400);
    }

    // Generate a unique ID for the enquiry
    const enquiryId = crypto.randomUUID();
    const timestamp = new Date().toISOString();

    // Store enquiry in KV store
    const enquiryData = {
      id: enquiryId,
      type: body.type,
      agencyName: body.agencyName || '',
      contactName: body.contactName,
      email: body.email,
      phone: body.phone || '',
      websiteUrl: body.websiteUrl || '',
      message: body.message || '',
      status: 'new',
      createdAt: timestamp,
    };

    await kv.set(`enquiry:${enquiryId}`, enquiryData);

    console.log(`New enquiry received: ${enquiryId} - Type: ${body.type}`);

    return c.json({ 
      success: true, 
      enquiryId,
      message: "Enquiry submitted successfully" 
    }, 201);

  } catch (error) {
    console.error("Error processing enquiry:", error);
    return c.json({ 
      error: "Failed to process enquiry", 
      details: error instanceof Error ? error.message : String(error) 
    }, 500);
  }
});

// Get all enquiries - for admin dashboard
app.get("/make-server-7930e57f/enquiries", async (c) => {
  try {
    console.log("Fetching all enquiries from KV store...");
    
    // Get all enquiries from KV store
    let enquiries = [];
    try {
      enquiries = await kv.getByPrefix("enquiry:");
    } catch (kvError: any) {
      console.error("KV store error:", kvError);
      console.error("KV store error type:", typeof kvError);
      console.error("KV store error stringified:", JSON.stringify(kvError));
      
      // Check if it's a "no rows" error (PGRST116) - this is normal when no enquiries exist
      const errorStr = JSON.stringify(kvError);
      const errorMsg = kvError?.message || '';
      const errorCode = kvError?.code || '';
      
      if (errorCode === "PGRST116" || errorStr.includes("PGRST116") || 
          errorStr.includes("0 rows") || errorMsg.includes("Cannot coerce")) {
        console.log("No enquiries found in database (empty table or PGRST116 error)");
        enquiries = [];
      } else {
        // For other errors, still return empty array to prevent dashboard breaking
        console.error("Unexpected KV error, returning empty array");
        enquiries = [];
      }
    }
    
    console.log(`Raw enquiries fetched: ${enquiries.length}`);
    
    // Ensure enquiries is an array
    if (!Array.isArray(enquiries)) {
      enquiries = [];
    }
    
    // Sort by createdAt timestamp (newest first)
    const sortedEnquiries = enquiries.sort((a: any, b: any) => {
      const dateA = a?.createdAt ? new Date(a.createdAt).getTime() : 0;
      const dateB = b?.createdAt ? new Date(b.createdAt).getTime() : 0;
      return dateB - dateA;
    });

    console.log(`Returning ${sortedEnquiries.length} enquiries`);

    return c.json({ 
      success: true,
      enquiries: sortedEnquiries 
    });

  } catch (error) {
    console.error("Error fetching enquiries:", error);
    console.error("Error details:", error instanceof Error ? error.message : String(error));
    // Return empty array instead of error to prevent dashboard from breaking
    return c.json({ 
      success: true,
      enquiries: [],
      warning: "Failed to fetch some enquiries"
    });
  }
});

// Get single enquiry by ID
app.get("/make-server-7930e57f/enquiries/:id", async (c) => {
  try {
    const { id } = c.req.param();
    
    let enquiry = null;
    try {
      enquiry = await kv.get(`enquiry:${id}`);
    } catch (kvError: any) {
      console.error("KV store error fetching enquiry:", kvError);
      // Check if it's a "no rows" error - means enquiry doesn't exist
      if (kvError?.message?.includes("PGRST116") || kvError?.message?.includes("0 rows") || kvError?.message?.includes("Cannot coerce")) {
        return c.json({ error: "Enquiry not found" }, 404);
      }
      return c.json({ error: "Enquiry not found" }, 404);
    }

    if (!enquiry) {
      return c.json({ error: "Enquiry not found" }, 404);
    }

    return c.json({ 
      success: true,
      enquiry 
    });

  } catch (error) {
    console.error("Error fetching enquiry:", error);
    return c.json({ 
      error: "Failed to fetch enquiry", 
      details: error instanceof Error ? error.message : String(error) 
    }, 500);
  }
});

// Update enquiry status
app.patch("/make-server-7930e57f/enquiries/:id", async (c) => {
  try {
    const { id } = c.req.param();
    const body = await c.req.json();

    // Get existing enquiry
    let existingEnquiry = null;
    try {
      existingEnquiry = await kv.get(`enquiry:${id}`);
    } catch (kvError: any) {
      console.error("KV store error fetching enquiry for update:", kvError);
      // Check if it's a "no rows" error - means enquiry doesn't exist
      if (kvError?.message?.includes("PGRST116") || kvError?.message?.includes("0 rows") || kvError?.message?.includes("Cannot coerce")) {
        return c.json({ error: "Enquiry not found" }, 404);
      }
      return c.json({ error: "Enquiry not found" }, 404);
    }
    
    if (!existingEnquiry) {
      return c.json({ error: "Enquiry not found" }, 404);
    }

    // Update enquiry
    const updatedEnquiry = {
      ...existingEnquiry,
      ...body,
      updatedAt: new Date().toISOString(),
    };

    await kv.set(`enquiry:${id}`, updatedEnquiry);

    console.log(`Enquiry updated: ${id}`);

    return c.json({ 
      success: true,
      enquiry: updatedEnquiry 
    });

  } catch (error) {
    console.error("Error updating enquiry:", error);
    return c.json({ 
      error: "Failed to update enquiry", 
      details: error instanceof Error ? error.message : String(error) 
    }, 500);
  }
});

// Delete enquiry
app.delete("/make-server-7930e57f/enquiries/:id", async (c) => {
  try {
    const { id } = c.req.param();

    // Check if enquiry exists
    let existingEnquiry = null;
    try {
      existingEnquiry = await kv.get(`enquiry:${id}`);
    } catch (kvError: any) {
      console.error("KV store error fetching enquiry for deletion:", kvError);
      // Check if it's a "no rows" error - means enquiry doesn't exist
      if (kvError?.message?.includes("PGRST116") || kvError?.message?.includes("0 rows") || kvError?.message?.includes("Cannot coerce")) {
        return c.json({ error: "Enquiry not found" }, 404);
      }
      return c.json({ error: "Enquiry not found" }, 404);
    }
    
    if (!existingEnquiry) {
      return c.json({ error: "Enquiry not found" }, 404);
    }

    await kv.del(`enquiry:${id}`);

    console.log(`Enquiry deleted: ${id}`);

    return c.json({ 
      success: true,
      message: "Enquiry deleted successfully" 
    });

  } catch (error) {
    console.error("Error deleting enquiry:", error);
    return c.json({ 
      error: "Failed to delete enquiry", 
      details: error instanceof Error ? error.message : String(error) 
    }, 500);
  }
});

// Package enquiries endpoint - for template package form submissions
app.post("/make-server-7930e57f/package-enquiries", async (c) => {
  try {
    const body = await c.req.json();
    
    // Validate required fields
    if (!body.type || !body.contactName || !body.email || !body.agencyName) {
      return c.json({ error: "Missing required fields: type, contactName, email, agencyName" }, 400);
    }

    // Generate a unique ID for the enquiry
    const enquiryId = crypto.randomUUID();
    const timestamp = new Date().toISOString();

    // Store package enquiry in KV store with rich details
    const enquiryData = {
      id: enquiryId,
      type: body.type, // "Silver Template Site" or "Gold Template Site"
      packageType: body.packageType, // "template_one" or "template_two"
      agencyName: body.agencyName,
      contactName: body.contactName,
      email: body.email,
      phone: body.phone || '',
      locations: body.locations || '',
      areasServed: body.areasServed || '',
      themeColor: body.themeColor || '',
      font: body.font || '',
      desiredDomain: body.desiredDomain || '',
      existingWebsite: body.existingWebsite || '',
      message: body.message || '',
      price: body.price || '',
      status: 'new',
      createdAt: timestamp,
    };

    await kv.set(`enquiry:${enquiryId}`, enquiryData);

    console.log(`New package enquiry received: ${enquiryId} - Type: ${body.type}`);

    return c.json({ 
      success: true, 
      enquiryId,
      message: "Package enquiry submitted successfully" 
    }, 201);

  } catch (error) {
    console.error("Error processing package enquiry:", error);
    return c.json({ 
      error: "Failed to process package enquiry", 
      details: error instanceof Error ? error.message : String(error) 
    }, 500);
  }
});

// Custom quote enquiries endpoint - for custom website quote requests
app.post("/make-server-7930e57f/custom-enquiries", async (c) => {
  try {
    const body = await c.req.json();
    
    // Validate required fields
    if (!body.type || !body.contactName || !body.email || !body.agencyName || !body.requirements) {
      return c.json({ error: "Missing required fields: type, contactName, email, agencyName, requirements" }, 400);
    }

    // Generate a unique ID for the enquiry
    const enquiryId = crypto.randomUUID();
    const timestamp = new Date().toISOString();

    // Store custom enquiry in KV store with rich details
    const enquiryData = {
      id: enquiryId,
      type: body.type, // "Fully Customised Website"
      packageType: body.packageType, // "custom_quote"
      agencyName: body.agencyName,
      contactName: body.contactName,
      email: body.email,
      phone: body.phone || '',
      locations: body.locations || '',
      areasServed: body.areasServed || '',
      requirements: body.requirements,
      desiredDomain: body.desiredDomain || '',
      existingWebsite: body.existingWebsite || '',
      budgetRange: body.budgetRange || '',
      timeline: body.timeline || '',
      message: body.message || '',
      status: 'new',
      createdAt: timestamp,
    };

    await kv.set(`enquiry:${enquiryId}`, enquiryData);

    console.log(`New custom quote enquiry received: ${enquiryId} - Type: ${body.type}`);

    return c.json({ 
      success: true, 
      enquiryId,
      message: "Custom quote enquiry submitted successfully" 
    }, 201);

  } catch (error) {
    console.error("Error processing custom quote enquiry:", error);
    return c.json({ 
      error: "Failed to process custom quote enquiry", 
      details: error instanceof Error ? error.message : String(error) 
    }, 500);
  }
});

Deno.serve(app.fetch);