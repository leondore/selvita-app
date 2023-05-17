import type { FC } from 'react';
import BaseIcon from '@/components/ui/BaseIcon';
import { contactInfo } from '@/utils/constants';

type SocialLinkProps = {
  network: 'instagram' | 'pinterest' | 'facebook' | 'twitter';
};

const SocialLink: FC<SocialLinkProps> = ({ network }) => {
  return (
    <a
      href={contactInfo[network]}
      className="flex h-full w-11 items-center justify-center py-2.5 transition-colors duration-200 ease-in-out hover:bg-overlay-link focus:bg-overlay-link md:py-0"
      target="_blank"
    >
      <BaseIcon icon={network} className="text-lg" />
      <span className="sr-only">{network}</span>
    </a>
  );
};

export default SocialLink;
