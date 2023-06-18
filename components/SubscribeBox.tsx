'use client';

import type { FC } from 'react';
import BaseInput from '@/components/ui/BaseInput';
import BaseButton from '@/components/ui/BaseButton';

interface SubscribeBoxProps {
  colorMode?: 'light' | 'dark';
  className?: string;
}

const SubscribeBox: FC<SubscribeBoxProps> = ({
  colorMode = 'dark',
  className = '',
}) => {
  const colorClass = colorMode === 'dark' ? 'bg-white/20' : 'bg-gray-50';

  return (
    <div
      className={`rounded-md px-9 py-10 ${colorClass} ${className}`}
      data-component="subscribe-box"
    >
      <h6 className="mb-5 text-gray-800">
        Suscribete para compartirte todo lo nuevo
      </h6>
      <form>
        <div className="flex items-center">
          <BaseInput
            type="email"
            name="subscribe"
            hideLabel
            withButton
            label="Email"
            placeholder="Direccion de email"
            defaultValue=""
            background="dark"
            fieldSize="lg"
            className="flex-auto"
          />
          <BaseButton
            type="submit"
            intent="success"
            size="lg"
            fixedWidth
            withField
            className="flex-shrink-0 flex-grow-0 basis-16"
          >
            Ir
          </BaseButton>
        </div>
      </form>
    </div>
  );
};

export default SubscribeBox;
