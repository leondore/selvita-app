import type { FC } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/pro-light-svg-icons';
import { faMessageSmile, faSpa } from '@fortawesome/pro-regular-svg-icons';
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
  'lgt-phone': faPhone,
  'reg-message-smile': faMessageSmile,
  'reg-spa': faSpa,
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
