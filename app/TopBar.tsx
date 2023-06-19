import BaseIcon from '@/components/ui/BaseIcon';
import SocialLink from '@/components/SocialLink';
import { siteConfig } from '@/config/site';

const socialNetworks = [
  'instagram',
  'pinterest',
  'facebook',
  'twitter',
] as const;

const TopBar = () => {
  const { contactInfo } = siteConfig;

  return (
    <div
      className="bg-dark text-xs font-normal text-white"
      data-component="top-bar"
    >
      <div className="container mx-auto flex flex-col items-center justify-center px-4 md:h-9 md:flex-row md:justify-between">
        <div className="flex items-center pt-2.5 md:pb-2.5">
          <span className="flex items-center">
            <BaseIcon
              icon="lgt-envelope"
              className="mr-2 hidden text-base sm:block"
            />
            <a href={`mailto:${contactInfo.email}`} className="hover:underline">
              {contactInfo.email}
            </a>
          </span>

          <span className="divider">&bull;</span>

          <span className="flex items-center">
            <BaseIcon
              icon="lgt-phone"
              className="mr-2 hidden text-base sm:block"
            />
            <a href={`tel:${contactInfo.phone}`} className="hover:underline">
              {contactInfo.phone}
            </a>
          </span>
        </div>

        <div className="flex h-full items-center">
          {socialNetworks.map((network) => (
            <SocialLink
              key={network}
              network={network}
              className="hover:bg-overlay-link"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
