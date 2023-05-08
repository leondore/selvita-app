import type { FC } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/pro-light-svg-icons';
import {
  faBoxesStacked,
  faChevronDown,
  faEnvelopeOpenText,
  faHashtag,
  faKey,
  faLink,
  faMagnifyingGlass,
  faMessageSmile,
  faPhone as faPhoneReg,
  faSpa,
  faTextSize,
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
  'lgt-phone': faPhone,
  'reg-boxes-stacked': faBoxesStacked,
  'reg-chevron-down': faChevronDown,
  'reg-envelope-open-text': faEnvelopeOpenText,
  'reg-hashtag': faHashtag,
  'reg-key': faKey,
  'reg-link': faLink,
  'reg-magnifying-glass': faMagnifyingGlass,
  'reg-message-smile': faMessageSmile,
  'reg-phone': faPhoneReg,
  'reg-spa': faSpa,
  'reg-text-size': faTextSize,
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
