import supabase from './supabase';

export async function getContacts() {
  let { data, error } = await supabase.from('contacts').select('*');

  if (error) {
    console.log(error);
    throw new Error('Contact list could not be loaded');
  }

  return data;
}

export async function createContact(newContact) {
  const { data, error } = await supabase
    .from('contacts')
    .insert([newContact])
    .select()
    .single();

  if (error) {
    console.log(error);
    throw new Error('Contact could not be created');
  }
}

export async function deleteContact(id) {
  const { data, error } = await supabase.from('contacts').delete().eq('id', id);

  if (error) {
    console.log(error);
    throw new Error('Contact could not be deleted');
  }

  return data;
}
