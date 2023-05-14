'use client';

import type { SelectOption } from '@/types/forms';
import type { FormEvent } from 'react';
import BaseInput from '@/components/BaseInput';
import BaseSelect from '@/components/BaseSelect';
import BaseButton from '@/components/BaseButton';
import Frame from '@/components/Frame';

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
  const testFormData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <Frame className="bg-gray-100">
      <form
        className="col-span-12 flex items-center gap-5"
        onSubmit={testFormData}
      >
        <BaseInput
          type="search"
          name="search"
          hasIcon
          hideLabel
          className="flex-1"
          label="Buscar entradas"
          placeholder="Buscar..."
          defaultValue=""
        />

        <BaseSelect
          name="category"
          hideLabel
          icon="reg-boxes-stacked"
          label="Filtrar por Categorias"
          options={categories}
          defaultValue={categories[0]}
          className="flex-1"
        />

        <BaseSelect
          name="tags"
          multiple
          hideLabel
          icon="reg-tags"
          label="Filtrar por Etiquetas"
          placeholder="Filtrar por Etiquetas..."
          options={tagOptions}
          defaultValue={[]}
          className="flex-1"
        />

        <BaseButton type="submit" intent="secondary" className="flex-none">
          Filter
        </BaseButton>
      </form>
    </Frame>
  );
};

export default BlogFilter;
