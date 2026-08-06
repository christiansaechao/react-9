import dotenv from "dotenv";
import ws from "ws";
import { createClient } from "@supabase/supabase-js";

// Load environment variables from .env file
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.warn(
    "⚠️ Warning: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing in your .env file!",
  );
}

// Initialize Supabase Client using Service Role Key
export const supabase = createClient(
  supabaseUrl || "",
  supabaseServiceRoleKey || "",
  {
    auth: {
      persistSession: false,
    },
    realtime: {
      transport: ws,
    },
  }
);

