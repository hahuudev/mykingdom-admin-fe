import { createCategory } from '@/api/category/requests';
import { Icons } from '@/assets/icons';
import { TextField } from '@/components/form';
import { TextAreaField } from '@/components/form/TextAreaField';
import { UploadButtonField } from '@/components/form/UploadButtonField';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { FormWrapper } from '@/components/ui/form';
import { HStack, VStack } from '@/components/utilities';
import { onMutateError } from '@/libs/common';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { type CategorySchema, categorySchema } from '../libs/validators';
import H3 from '@/components/text/H3';

type Props = {
  refetch: any;
};
const FormCreateCategory = ({ refetch }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const router = useRouter();

  const { mutate, isLoading } = useMutation(createCategory);

  const form = useForm<CategorySchema>({
    defaultValues: {
      image: '',
      name: '',
      description: '',
    },
    resolver: zodResolver(categorySchema),
  });

  const handleSubmit: SubmitHandler<CategorySchema> = async (formData) => {
    mutate(formData, {
      onSuccess: () => {
        toast.success('Create new category successfully!');
        setIsOpenModal(false);
        refetch();
      },
      onError: onMutateError,
    });
  };

  return (
    <Dialog open={isOpenModal} onOpenChange={setIsOpenModal}>
      <DialogTrigger asChild>
        <Button>
          <Icons.plus />
          Create
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[92vh] max-w-[520px] overflow-y-auto rounded-t-md border-none p-0 shadow-none">
        <div className="px-6 py-2 lg:px-10">
          <HStack pos="apart" noWrap align="center">
            <HStack className="mt-3 h-12 w-12 rounded-full border bg-[#4D9E2A26] " pos="center">
              <Icons.user className="w-5 stroke-primary-400" />
            </HStack>

            <span className="cursor-pointer rounded-sm p-1 hover:bg-grey-100" onClick={() => setIsOpenModal(false)}>
              <Icons.X className="stroke-grey-500" />
            </span>
          </HStack>

          <H3 className="mt-4">Create New Category</H3>

          <div className="my-6">
            <FormWrapper form={form} onSubmit={handleSubmit}>
              <VStack spacing={16}>
                <TextField required control={form.control} name="name" label="Name" className="h-12" fullWidth />

                <TextAreaField required control={form.control} name="description" label="Description" className="h" fullWidth />

                <UploadButtonField
                  accept={['png', 'jpg', 'jpeg']}
                  control={form.control}
                  name="image"
                  label="Image"
                  className="h-12"
                  fullWidth
                  previewClassNames={{
                    image: 'object-contain',
                  }}
                />
              </VStack>

              <HStack pos="center" spacing={20} className="mt-10">
                <Button size="sm" variant="outline" className="flex-1 px-6" onClick={() => setIsOpenModal(false)}>
                  Cancel
                </Button>

                <Button type="submit" size="sm" className="flex-1 px-6" loading={isLoading} disabled={!form.formState.isDirty || isLoading}>
                  Change Role
                </Button>
              </HStack>
            </FormWrapper>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FormCreateCategory;
