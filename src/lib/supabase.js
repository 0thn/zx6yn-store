import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://atqqqlqxwcgkcwaiccvrt.supabase.co';
const supabaseAnonKey = 'sb_publishable_VTfxM38WBC8muQHlgw56Zw_KHzfldmq';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);