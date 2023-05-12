'use client';

import { SelectOption } from '@/types/forms';
import { useState } from 'react';
import BaseInput from '@/components/BaseInput';
import BaseSelect from '@/components/BaseSelect';
import Frame from '@/components/Frame';

const categories: SelectOption[] = [
  {
    id: 'wksadfaji4',
    value: '',
    label: 'Filtrar por Categorias...',
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
  const [search, setSearch] = useState('');
  const [category, setCategories] = useState(categories[0]);
  const [tags, setTags] = useState<SelectOption[]>([]);

  return (
    <Frame className="bg-gray-100">
      <BaseInput
        type="search"
        hasIcon
        hideLabel
        className="col-span-4"
        label="Buscar entradas"
        placeholder="Buscar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <BaseSelect
        hideLabel
        icon="reg-boxes-stacked"
        label="Filtrar por Categorias"
        options={categories}
        value={category}
        handler={setCategories}
        className="col-span-4"
      />

      <BaseSelect
        multiple
        hideLabel
        icon="reg-tags"
        label="Filtrar por Etiquetas"
        placeholder="Filtrar por Etiquetas..."
        options={tagOptions}
        value={tags}
        handler={setTags}
        className="col-span-4"
      />
    </Frame>
  );
};

export default BlogFilter;
