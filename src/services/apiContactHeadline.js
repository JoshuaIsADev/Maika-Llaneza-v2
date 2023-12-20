import supabase from './supabase';

export async function getContactHeadline() {
  let { data, error } = await supabase.from('contactHeadline').select('*');

  if (error) {
    console.log(error);
    throw new Error('Contact headline could not be loaded');
  }

  return data;
}

export async function updateContactHeadline(data) {
  const { contactHeadlineId: id, headline } = data;
  console.log({ ...data });

  const { data: updatedData, error } = await supabase
    .from('contactHeadline')
    .update({ headline })
    .eq('id', id)
    .single();

  if (error) {
    console.log(error);
    throw new Error('Contact headline could not be updated');
  }
}
