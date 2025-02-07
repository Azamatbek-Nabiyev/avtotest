import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kwedmwzgwjtwviibugxh.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3ZWRtd3pnd2p0d3ZpaWJ1Z3hoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcyNjY5MzEsImV4cCI6MjA1Mjg0MjkzMX0.8VusWG6WRS5Qdoi63c2NpR7BMzRuIbjRLyYq0CFWhw8';
export const supabase = createClient(supabaseUrl, supabaseKey);
