import supabase from './supabase';

export async function getWritingsList() {
  let { data, error } = await supabase.from('writingsList').select('*');

  if (error) {
    console.log(error);
    throw new Error('Writings list could not be loaded');
  }

  return data;
}
