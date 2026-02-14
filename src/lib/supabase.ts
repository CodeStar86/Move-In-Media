import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/database';
import { projectId, publicAnonKey } from '/utils/supabase/info';

const supabaseUrl = `https://${projectId}.supabase.co`;
const supabaseAnonKey = publicAnonKey;

// Safe storage implementation that falls back to memory if localStorage is unavailable
const createSafeStorage = () => {
  const memoryStorage: Record<string, string> = {};
  const isLocalStorageAvailable = (() => {
    try {
      const test = '__localStorage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch {
      return false;
    }
  })();

  return {
    getItem: (key: string): string | null => {
      try {
        return isLocalStorageAvailable ? localStorage.getItem(key) : memoryStorage[key] || null;
      } catch {
        return memoryStorage[key] || null;
      }
    },
    setItem: (key: string, value: string): void => {
      try {
        if (isLocalStorageAvailable) {
          localStorage.setItem(key, value);
        } else {
          memoryStorage[key] = value;
        }
      } catch {
        memoryStorage[key] = value;
      }
    },
    removeItem: (key: string): void => {
      try {
        if (isLocalStorageAvailable) {
          localStorage.removeItem(key);
        } else {
          delete memoryStorage[key];
        }
      } catch {
        delete memoryStorage[key];
      }
    },
  };
};

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    storage: createSafeStorage(),
  },
});