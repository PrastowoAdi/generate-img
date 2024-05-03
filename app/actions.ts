'use server';

import getBase64 from '@/lib/getPlaiceholder';

type FormState =
  | {
      success?: {
        src: string;
        data: string;
      };
      error?: string;
    }
  | undefined;

export async function generateBase64(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const url = formData.get('url') as string;

    const fileIdRegex = /\/file\/d\//;
    const viewRegex = /\/view\?usp=drive_link/;

    const newUrl = url.replace(fileIdRegex, '/uc?export=view&id=');

    const data = await getBase64(newUrl.replace(viewRegex, ''));
    if (data) {
      return {
        success: {
          src: newUrl.replace(viewRegex, ''),
          data,
        },
      };
    } else {
      return {
        success: {
          src: '',
          data: '',
        },
      };
    }
  } catch (error) {
    let message = 'Unexpected error';
    if (error instanceof Error) {
      message = error.message;
    }
    return { error: message };
  }
}
