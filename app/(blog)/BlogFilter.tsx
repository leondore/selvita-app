'use client';

import type { SelectOption } from '@/types/forms';
import type { FormEvent } from 'react';
import BasePopover from '@/components/ui/BasePopover';
import BaseInput from '@/components/ui/BaseInput';
import BaseListbox from '@/components/ui/BaseListbox';
import BaseButton from '@/components/ui/BaseButton';

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
    <BasePopover
      width={284}
      triggerText="Filtrar"
      triggerIcon="reg-sliders-up"
      triggerIntent="secondary"
    >
      <form className="pt-6" onSubmit={testFormData}>
        <div className="px-5">
          <BaseInput
            type="search"
            name="search"
            hasIcon
            hideLabel
            label="Buscar entradas"
            placeholder="Buscar..."
            defaultValue=""
            background="gray"
            className="mb-4 w-full"
          />

          <BaseListbox
            name="category"
            hideLabel
            icon="reg-boxes-stacked"
            label="Filtrar por Categorias"
            options={categories}
            defaultValue={categories[0]}
            background="gray"
            className="mb-4 w-full"
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
            background="gray"
            className="mb-4 w-full"
          />
        </div>

        <div className="rounded-b-lg bg-gray-100 px-5 py-4">
          <BaseButton type="submit" intent="secondary" className="w-full">
            Filtrar
          </BaseButton>
        </div>
      </form>
    </BasePopover>
  );
};

export default BlogFilter;
