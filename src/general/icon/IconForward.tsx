import * as React from 'react';
import SvgIcon from '../Icon';

const IconForward: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M12 8V4l8 8-8 8v-4H4V8z" />
  </SvgIcon>
);

export default IconForward;
