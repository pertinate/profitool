import { createClient } from "@supabase/supabase-js";

// console.log(process.env);
export const supabase = createClient(
  process.env.NEXT_SB_URL as string,
  process.env.NEXT_SB_ANON_KEY as string
);
