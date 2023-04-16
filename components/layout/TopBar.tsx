import BaseIcon from '@/components/BaseIcon';
import SocialLink from '@/components/SocialLink';
import { contactInfo } from '@/utils/constants';

const socialNetworks = [
  'instagram',
  'pinterest',
  'facebook',
  'twitter',
] as const;

const TopBar = () => {
  return (
    <div className="flex items-center justify-between bg-dark px-10 text-xs font-normal text-white md:h-9">
      <div className="flex items-center py-2.5">
        <span className="flex items-center">
          <BaseIcon icon="reg-envelope" className="mr-2 text-base" />
          <a href={`mailto:${contactInfo.email}`} className="hover:underline">
            {contactInfo.email}
          </a>
        </span>

        <span className="divider">&bull;</span>

        <span className="flex items-center">
          <BaseIcon icon="reg-phone" className="mr-2 text-base" />
          <a href={`tel:${contactInfo.phone}`} className="hover:underline">
            {contactInfo.phone}
          </a>
        </span>
      </div>

      <div className="flex h-full items-center">
        {socialNetworks.map((network) => (
          <SocialLink key={network} network={network} />
        ))}
      </div>
    </div>
  );
};

export default TopBar;
