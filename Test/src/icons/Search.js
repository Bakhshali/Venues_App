import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
const SvgSearch = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="none"
    viewBox="0 0 21 21"
    {...props}>
    <Circle
      cx={9.767}
      cy={9.767}
      r={8.989}
      stroke="#200E32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke="#200E32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.018 16.485 19.542 20"
    />
  </Svg>
);
export default SvgSearch;
