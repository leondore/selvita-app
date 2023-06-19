import type { FC } from 'react';
import BaseIcon from '@/components/ui/BaseIcon';
import { siteConfig } from '@/config/site';

type SocialLinkProps = {
  network: 'instagram' | 'pinterest' | 'facebook' | 'twitter';
  className?: string;
};

const SocialLink: FC<SocialLinkProps> = ({ network, className = '' }) => {
  const { contactInfo } = siteConfig;

  return (
    <a
      href={contactInfo[network]}
      className={`flex h-full w-11 items-center justify-center py-2.5 transition-colors duration-200 ease-in-out md:py-0 ${className}`}
      target="_blank"
    >
      <BaseIcon icon={network} className="text-lg" />
      <span className="sr-only">{network}</span>
    </a>
  );
};

export default SocialLink;
