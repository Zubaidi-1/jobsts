import { createClient } from "@/utils/supabase/client";
const supabase = createClient();

// * login function
export const login = async (email: string, password: string) => {
  return await supabase.auth.signInWithPassword({ email, password });
};

//  * Register Function

export const registerUser = async (email: string, password: string) => {
  return await supabase.auth.signUp({ email, password });
};
