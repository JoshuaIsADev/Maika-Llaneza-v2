import supabase from './supabase';

export async function getParagraph() {
  let { data, error } = await supabase.from('paragraph').select('*');

  if (error) {
    console.log(error);
    throw new Error('About could not be loaded');
  }

  return data;
}
