import supabase from './supabase';

export async function getContactList() {
  let { data, error } = await supabase.from('contactList').select('*');

  if (error) {
    console.log(error);
    throw new Error('Contact list could not be loaded');
  }

  return data;
}
