import supabase from './supabase';

export async function getParagraphs() {
  let { data, error } = await supabase.from('paragraphs').select('*');

  if (error) {
    console.log(error);
    throw new Error('About could not be loaded');
  }

  return data;
}
