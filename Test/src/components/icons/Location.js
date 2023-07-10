import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
const SvgLocation = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 18 21"
    {...props}>
    <Path
      stroke="#200E32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1.24 9.391a7.678 7.678 0 1 1 15.356.052v.087c-.052 2.757-1.592 5.305-3.479 7.296a20.187 20.187 0 0 1-3.59 2.957.93.93 0 0 1-1.218 0 19.819 19.819 0 0 1-5.052-4.73 9.826 9.826 0 0 1-2.018-5.636v-.026Z"
      clipRule="evenodd"
    />
    <Circle
      cx={8.917}
      cy={9.539}
      r={2.461}
      stroke="#200E32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgLocation;
