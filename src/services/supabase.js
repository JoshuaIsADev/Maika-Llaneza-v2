import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://icechurbagglqkkmhoss.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljZWNodXJiYWdnbHFra21ob3NzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI1MDMxMTgsImV4cCI6MjAxODA3OTExOH0.Mzo2alaWLuOa0fxBk-Mhee9lCBIZGzJULOoitZJtiRM';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
