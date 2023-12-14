import supabase from './supabase';

export async function getAbout() {
  let { data, error } = await supabase.from('about').select('*');

  if (error) {
    console.log(error);
    throw new Error('About could not be loaded');
  }

  return data;
}
