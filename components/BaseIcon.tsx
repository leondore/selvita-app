import type { FC } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/pro-regular-svg-icons';
import {
  faInstagram,
  faPinterestP,
  faFacebookF,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

type BaseIconProps = {
  icon: keyof typeof icons;
  className?: string;
};

const icons = {
  'reg-envelope': faEnvelope,
  'reg-phone': faPhone,
  instagram: faInstagram,
  pinterest: faPinterestP,
  facebook: faFacebookF,
  twitter: faTwitter,
};

const BaseIcon: FC<BaseIconProps> = ({ icon, className = '' }) => {
  return <FontAwesomeIcon icon={icons[icon]} className={className} />;
};

export default BaseIcon;
