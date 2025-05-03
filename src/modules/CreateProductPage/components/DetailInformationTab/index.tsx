'use client';

import H3 from '@/components/text/H3';
import { VStack } from '@/components/utilities';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import type { ProductSchema } from '../../libs/validators';
import VariantField from '../VariantField';

const DetailInformationTab = () => {
  const form = useFormContext<ProductSchema>();
  return (
    <div>
      <H3>Detail Information</H3>

      <VStack className="mt-8">
        <div className="">
          <VariantField name="variants" control={form.control} />
        </div>
      </VStack>
    </div>
  );
};

export default DetailInformationTab;
