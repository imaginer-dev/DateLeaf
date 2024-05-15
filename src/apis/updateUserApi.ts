import supabase from '@/supabase';

export const updateUserPassword = async (password: string) => {
  const { data, error } = await supabase.auth.updateUser({ password });

  if (error) {
    throw error;
  }

  return data;
};

interface UpdateUserProfileParams {
  id: string;
  user_nickname: string | null;
  file: File | null;
}

export const updateUserProfile = async ({ id, user_nickname, file }: UpdateUserProfileParams) => {
  let imageUrl: string | null = null;

  const bucketName = 'profile';

  if (file) {
    const filePath = `profile_images/${id}/${file.name}`;
    console.log(`Uploading file to path: ${filePath}`);

    const { error: uploadError } = await supabase.storage.from(bucketName).upload(filePath, file, { upsert: true });

    if (uploadError) {
      console.error(`File upload error: ${uploadError.message}`);
      throw new Error(`File upload error: ${uploadError.message}`);
    }

    const { data } = supabase.storage.from(bucketName).getPublicUrl(filePath);

    if (!data || !data.publicUrl) {
      console.error(`Unable to get public URL for file: ${filePath}`);
      throw new Error(`Unable to get public URL for file: ${filePath}`);
    }

    imageUrl = data.publicUrl;
  }

  const { data: updatedData, error: updateError } = await supabase
    .from('profiles')
    .update({ user_nickname, image_url: imageUrl })
    .eq('id', id);

  if (updateError) {
    console.error(`Profile update error: ${updateError.message}`);
    throw new Error(`Profile update error: ${updateError.message}`);
  }

  return updatedData;
};
