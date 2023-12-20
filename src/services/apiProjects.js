import supabase from './supabase';

export async function getProjects() {
  let { data, error } = await supabase.from('projects').select('*');

  if (error) {
    console.log(error);
    throw new Error('Projects list could not be loaded');
  }

  return data;
}

export async function createProject(newProject) {
  const { data, error } = await supabase
    .from('projects')
    .insert([newProject])
    .select();

  if (error) {
    console.log(error);
    throw new Error('Project could not be created');
  }
}

export async function updateProject(data) {
  const { projectId: id, title, publisher, date, url } = data;
  console.log({ ...data });

  const { data: updatedData, error } = await supabase
    .from('projects')
    .update({ title, publisher, date, url })
    .eq('id', id)
    .single();

  if (error) {
    console.log(error);
    throw new Error('Project could not be updated');
  }
}

export async function deleteProject(id) {
  const { data, error } = await supabase.from('projects').delete().eq('id', id);

  if (error) {
    console.log(error);
    throw new Error('Project could not be deleted');
  }

  return data;
}
