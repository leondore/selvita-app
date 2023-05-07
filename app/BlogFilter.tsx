'use client';

import { useState } from 'react';
import BaseInput from '@/components/BaseInput';
import BaseSelect from '@/components/BaseSelect';
import Frame from '@/components/Frame';

const BlogFilter = () => {
  const [search, setSearch] = useState('');
  const [category, setCategories] = useState('cultivo');

  const categories = [
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
        label="Categorias"
        options={categories}
        value={category}
        handler={setCategories}
      />
    </Frame>
  );
};

export default BlogFilter;
