import type { FunctionComponent } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCircleCheck } from '@fortawesome/pro-regular-svg-icons';

type BaseIconProps = {
  icon: keyof typeof icons;
  className?: string;
};

const icons = {
  'reg-envelope': faEnvelope,
  'reg-circle-check': faCircleCheck,
};

const BaseIcon: FunctionComponent<BaseIconProps> = ({
  icon,
  className = '',
}) => {
  return <FontAwesomeIcon icon={icons[icon]} className={className} />;
};

export default BaseIcon;
