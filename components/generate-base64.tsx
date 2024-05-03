'use client';

import { useFormState, useFormStatus } from 'react-dom';

import { generateBase64 } from '@/app/actions';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

function ButtonSubmit() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      Generate
    </Button>
  );
}
export const GenerateBase64 = () => {
  const [formState, formAction] = useFormState(generateBase64, undefined);

  return (
    <div className="flex flex-col">
      <p className="pb-2 font-semibold">Generate image from link drive</p>
      <form action={formAction} className="flex items-center gap-5">
        <Input
          id="url"
          name="url"
          placeholder="Masukan link gdrive"
          className="flex-1"
        />
        <ButtonSubmit />
      </form>
      {formState?.success ? (
        <div className="w-1/2 flex flex-row items-center space-x-3 pt-7">
          <Button
            variant="outline"
            onClick={() =>
              navigator.clipboard.writeText(formState.success?.src!)
            }
          >
            Copy src
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              navigator.clipboard.writeText(formState.success?.data!)
            }
          >
            Copy data
          </Button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
