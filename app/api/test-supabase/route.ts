import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    // Test environment variables
    const hasUrl = !!process.env.NEXT_PUBLIC_SUPABASE_URL
    const hasKey = !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    console.log('Environment check:', {
      hasUrl,
      hasKey,
      url: process.env.NEXT_PUBLIC_SUPABASE_URL?.slice(0, 20) + '...',
    })

    // Test Supabase connection
    const { data, error } = await supabase
      .from('waitlist')
      .select('count')
      .limit(1)

    if (error) {
      console.error('Supabase test error:', error)
      return NextResponse.json({
        success: false,
        error: error.message,
        errorCode: error.code,
        hasUrl,
        hasKey,
      })
    }

    return NextResponse.json({
      success: true,
      message: 'Supabase connection successful',
      hasUrl,
      hasKey,
      data,
    })
  } catch (error) {
    console.error('Test endpoint error:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    })
  }
}
