import supabase from './supabase';

export async function getContactHeadline() {
  let { data, error } = await supabase.from('contactHeadline').select('*');

  if (error) {
    console.log(error);
    throw new Error('Contac headline could not be loaded');
  }

  return data;
}
