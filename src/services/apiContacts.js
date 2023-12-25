import supabase from './supabase';

export async function getContacts() {
  let { data, error } = await supabase.from('contacts').select('*');

  if (error) {
    console.log(error);
    throw new Error('Contact list could not be loaded');
  }

  return data;
}

export async function updateContact(data) {
  const { contactId: id, name, url } = data;

  const { data: updatedData, error } = await supabase
    .from('contacts')
    .update({ name, url })
    .eq('id', id)
    .single();

  if (error) {
    console.log(error);
    throw new Error('Contact could not be updated');
  }
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
