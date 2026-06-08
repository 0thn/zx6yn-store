import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request) {
  try {
    const { email } = await request.json();
    
    // Server ke andar direct connection (Browser ko nahi dikhega)
    const supabaseUrl = 'https://atqqqlqxwcgkcwaiccvrt.supabase.co';
    const supabaseKey = 'sb_publishable_VTfxM38WBC8muQHlgw56Zw_KHzfldmq';
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data, error } = await supabase.auth.signInWithOtp({ 
      email,
      options: { shouldCreateUser: true }
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: 'Server connection failed' }, { status: 500 });
  }
}