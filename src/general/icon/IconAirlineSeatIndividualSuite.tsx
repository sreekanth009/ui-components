import * as React from 'react';
import SvgIcon from '../Icon';

const IconAirlineSeatIndividualSuite: React.SFC<
  React.SVGProps<SVGSVGElement>
> = ({ ref, ...props }) => (
  <SvgIcon {...props}>
    <path d="M7 13c1.65 0 3-1.35 3-3S8.65 7 7 7s-3 1.35-3 3 1.35 3 3 3zm12-6h-8v7H3V7H1v10h22v-6c0-2.21-1.79-4-4-4z" />
  </SvgIcon>
);

export default IconAirlineSeatIndividualSuite;
