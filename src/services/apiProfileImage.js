import supabase, { supabaseUrl } from './supabase';

export async function getProfileImage() {
  let { data, error } = await supabase.from('profileImage').select('*');

  if (error) {
    console.log(error);
    throw new Error('Image could not be loaded');
  }
  // console.log(data);

  return data;
}

export async function updateProfileImage(data) {
  // const hasImagePath = data.image.startsWith(supabase);
  const imageName = `${Math.floor(Math.random() * 1000000)}-${
    data.name
  }`.replaceAll('/', '');
  // console.log(data);
  let file = data;

  const image = `${supabaseUrl}/storage/v1/object/public/about/${imageName}`;

  const { error: storageError } = await supabase.storage
    .from('about')
    .upload(imageName, file);

  if (storageError) {
    console.log(storageError);
    throw new Error('Profile image could not be updated');
  }

  const { error: imagePathError } = await supabase
    .from('profileImage')
    .update({ image: image })
    .eq('id', 1)
    .select();

  if (imagePathError) {
    console.log(imagePathError);
    throw new Error('Profile url could not be updated');
  }
}
