import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgLeftBack = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    {...props}>
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m14 7-5 5 5 5"
    />
  </Svg>
);
export default SvgLeftBack;
