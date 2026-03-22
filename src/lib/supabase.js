import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://vlmfhzwyvylucjyymenl.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsbWZoend5dnlsdWNqeXltZW5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQxOTY1MzAsImV4cCI6MjA4OTc3MjUzMH0.8XGGGKDRQqstZFRQdSZQbp46e2J1iwTMTR_tJb_u0mY'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
