import type { FC } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faHashtag,
  faKey,
  faLink,
  faMagnifyingGlass,
  faPhone,
  faTextSize,
} from '@fortawesome/pro-light-svg-icons';
import {
  faMessageSmile,
  faSpa,
  faXmark,
} from '@fortawesome/pro-regular-svg-icons';
import {
  faInstagram,
  faPinterestP,
  faFacebookF,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

export type Icons = keyof typeof icons;

type BaseIconProps = {
  icon: Icons;
  className?: string;
  children?: React.ReactNode;
};

const icons = {
  'lgt-envelope': faEnvelope,
  'lgt-hashtag': faHashtag,
  'lgt-key': faKey,
  'lgt-link': faLink,
  'lgt-magnifying-glass': faMagnifyingGlass,
  'lgt-phone': faPhone,
  'lgt-text-size': faTextSize,
  'reg-message-smile': faMessageSmile,
  'reg-spa': faSpa,
  'reg-xmark': faXmark,
  instagram: faInstagram,
  pinterest: faPinterestP,
  facebook: faFacebookF,
  twitter: faTwitter,
};

const BaseIcon: FC<BaseIconProps> = ({ icon, className = '', children }) => {
  return (
    <span className="leading-none">
      <FontAwesomeIcon icon={icons[icon]} className={className} />
      {children && <span className="sr-only">{children}</span>}
    </span>
  );
};

export default BaseIcon;
