import supabase from './supabase';

export async function getHeadline() {
  let { data, error } = await supabase.from('headline').select('*');

  if (error) {
    console.log(error);
    throw new Error('About could not be loaded');
  }

  return data;
}

export async function updateHeadline(data) {
  const { headlineId: id, headlineText, subHeadline } = data;
  console.log({ ...data });

  const { data: updatedData, error } = await supabase
    .from('headline')
    .update({ headlineText, subHeadline })
    .eq('id', id)
    .single();

  if (error) {
    console.log(error);
    throw new Error('Headline could not be updated');
  }
}
