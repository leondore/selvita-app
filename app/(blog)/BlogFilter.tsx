'use client';

import type { SelectOption } from '@/types/forms';
import type { FormEvent } from 'react';
import BaseInput from '@/components/ui/BaseInput';
import BaseListbox from '@/components/ui/BaseListbox';
import BaseButton from '@/components/ui/BaseButton';
import Frame from '@/components/ui/Frame';

const categories: SelectOption[] = [
  {
    id: 'wksadfaji4',
    value: '',
    label: 'Filtrar por Categoria...',
    disabled: false,
  },
  { id: 'asdkjfaksjdf', value: 'cultivo', label: 'Cultivo', disabled: false },
  {
    id: 'eqwerqwerweq',
    value: 'succulentas',
    label: 'Succulentas',
    disabled: false,
  },
  {
    id: 'jkhlkhlljh',
    value: 'plagas',
    label: 'Control de Plagas',
    disabled: true,
  },
  {
    id: 'yuyouyoiuy',
    value: 'jardineria',
    label: 'Jardineria',
    disabled: false,
  },
  {
    id: 'cxvbxvcbxcvb',
    value: 'mantenimiento',
    label: 'Mantenimiento',
    disabled: false,
  },
];

const tagOptions: SelectOption[] = [
  { id: 'asdkjfaksjdf', value: 'cultivo', label: 'Cultivo', disabled: false },
  {
    id: 'eqwerqwerweq',
    value: 'succulentas',
    label: 'Succulentas',
    disabled: false,
  },
  {
    id: 'jkhlkhlljh',
    value: 'plagas',
    label: 'Control de Plagas',
    disabled: false,
  },
];

const BlogFilter = () => {
  const testFormData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <Frame className="bg-gray-100">
      <form
        className="col-span-12 flex flex-wrap items-center gap-5"
        onSubmit={testFormData}
      >
        <BaseInput
          type="search"
          name="search"
          hasIcon
          hideLabel
          label="Buscar entradas"
          placeholder="Buscar..."
          defaultValue=""
          className="basis-full md:basis-[calc(50%-10px)] lg:flex-1"
        />

        <BaseListbox
          name="category"
          hideLabel
          icon="reg-boxes-stacked"
          label="Filtrar por Categorias"
          options={categories}
          defaultValue={categories[0]}
          className="basis-full md:basis-[calc(50%-10px)] lg:flex-1"
        />

        <BaseListbox
          name="tags"
          multiple
          hideLabel
          icon="reg-tags"
          label="Filtrar por Etiquetas"
          placeholder="Filtrar por Etiquetas..."
          options={tagOptions}
          defaultValue={[]}
          className="basis-full md:basis-[calc(50%-10px)] lg:flex-1"
        />

        <BaseButton
          type="submit"
          intent="secondary"
          className="basis-full md:basis-[calc(50%-10px)] lg:flex-none"
        >
          Filter
        </BaseButton>
      </form>
    </Frame>
  );
};

export default BlogFilter;
