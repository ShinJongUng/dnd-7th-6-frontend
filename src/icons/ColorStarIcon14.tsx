import React from 'react';
import {Path, Svg} from 'react-native-svg';

import theme from 'src/styles/Theme';

const ColorStarIcon14 = () => {
  return (
    <Svg width={14} height={14} viewBox={'0 0 14 14'} fill="none">
      <Path
        d="M8.99134 4.64956L7.30317 0.989616C7.18403 0.731326 6.81694 0.731326 6.6978 0.989616L5.00963 4.64956C4.96108 4.75483 4.86131 4.82731 4.74619 4.84096L0.74371 5.31552C0.461246 5.34901 0.347807 5.69814 0.556641 5.89126L3.51578 8.62779C3.60089 8.70649 3.639 8.82377 3.6164 8.93748L2.8309 12.8907C2.77547 13.1697 3.07245 13.3855 3.32066 13.2465L6.83767 11.2779C6.93883 11.2212 7.06214 11.2212 7.1633 11.2779L10.6803 13.2465C10.9285 13.3855 11.2255 13.1697 11.1701 12.8907L10.3846 8.93748C10.362 8.82377 10.4001 8.70649 10.4852 8.62779L13.4443 5.89126C13.6532 5.69814 13.5397 5.34901 13.2573 5.31552L9.25478 4.84096C9.13966 4.82731 9.03989 4.75483 8.99134 4.64956Z"
        fill={theme.colors.grayscale[6]}
      />
    </Svg>
  );
};

export default ColorStarIcon14;
