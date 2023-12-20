import supabase from './supabase';

export async function getParagraphs() {
  let { data, error } = await supabase.from('paragraphs').select('*');

  if (error) {
    console.log(error);
    throw new Error('Paragraph could not be loaded');
  }

  return data;
}

export async function updateParagraph(data) {
  const { paragraphId: id, paragraphText, title } = data;
  console.log({ ...data });

  const { data: updatedData, error } = await supabase
    .from('paragraphs')
    .update({ paragraphText, title })
    .eq('id', id)
    .single();

  if (error) {
    console.log(error);
    throw new Error('Paragraph could not be updated');
  }
}

export async function createParagraph(newParagraph) {
  const { data, error } = await supabase
    .from('paragraphs')
    .insert([newParagraph])
    .select();

  if (error) {
    console.log(error);
    throw new Error('Paragraph could not be created');
  }

  return data;
}

export async function deleteParagraph(id) {
  const { data, error } = await supabase
    .from('paragraphs')
    .delete()
    .eq('id', id);

  if (error) {
    console.log(error);
    throw new Error('Paragraph could not be deleted');
  }

  return data;
}
