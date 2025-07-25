import { createClient } from "@supabase/supabase-js"

let supabaseClient: ReturnType<typeof createClient> | null = null

export function createClientSupabaseClient() {
  if (supabaseClient) return supabaseClient

  // Verificar se estamos no navegador
  if (typeof window === "undefined") {
    throw new Error("createClientSupabaseClient deve ser usado apenas no cliente")
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase URL and key must be defined")
  }

  supabaseClient = createClient(supabaseUrl, supabaseAnonKey)
  return supabaseClient
}
