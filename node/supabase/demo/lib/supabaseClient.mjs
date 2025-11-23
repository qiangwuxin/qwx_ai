//Base 服务模块
import{
    createClient
}from '@supabase/supabase-js'
import{
    config
}from 'dotenv';
config();

export const supabase=createClient(
    process.env.SUPABASE_Url,
    process.env.SUPABASE_Key
)