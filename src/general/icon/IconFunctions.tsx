import * as React from 'react';
import SvgIcon from '../Icon';

const IconFunctions: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7z" />
  </SvgIcon>
);

export default IconFunctions;
