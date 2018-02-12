import * as React from 'react';
import SvgIcon from '../Icon';

const IconSignalCellularConnectedNoInternet2Bar: React.SFC<
  React.SVGProps<SVGSVGElement>
> = ({ ref, ...props }) => (
  <SvgIcon {...props}>
    <path fillOpacity=".3" d="M22 8V2L2 22h16V8z" />
    <path d="M14 22V10L2 22h12zm6-12v8h2v-8h-2zm0 12h2v-2h-2v2z" />
  </SvgIcon>
);

export default IconSignalCellularConnectedNoInternet2Bar;
