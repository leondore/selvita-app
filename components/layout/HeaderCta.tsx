'use client';

import type { FC } from 'react';
import type { FormElemSize } from '@/types/base';
import { useRouter } from 'next/navigation';
import BaseButton from '@/components/BaseButton';

interface HeaderCtaProps {
  className?: string;
  size?: FormElemSize;
  children: React.ReactNode;
}

const HeaderCta: FC<HeaderCtaProps> = ({
  size = 'md',
  className = '',
  children,
}) => {
  const router = useRouter();

  return (
    <BaseButton
      size={size}
      icon="reg-message-smile"
      className={className}
      onClick={() => router.push('/contacto')}
    >
      {children}
    </BaseButton>
  );
};

export default HeaderCta;
