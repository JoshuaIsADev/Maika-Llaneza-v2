import supabase from './supabase';

export async function getHeadline() {
  let { data, error } = await supabase.from('headline').select('*');

  if (error) {
    console.log(error);
    throw new Error('About could not be loaded');
  }

  return data;
}
