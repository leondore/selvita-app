'use client';

import { useState } from 'react';
import BaseInput from '@/components/BaseInput';
import Frame from '@/components/Frame';

const BlogFilter = () => {
  const [search, setSearch] = useState('');

  return (
    <Frame>
      <BaseInput
        type="search"
        hasIcon
        hideLabel
        label="Buscar entradas"
        placeholder="Buscar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Frame>
  );
};

export default BlogFilter;
