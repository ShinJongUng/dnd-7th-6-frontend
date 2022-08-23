import * as React from 'react';
import {Svg, Path} from 'react-native-svg';

import theme from 'src/styles/Theme';

const FocusedBoothIcon = () => (
  <Svg width={24} height={24} fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.5 9.923c0 4.576-3.775 8.944-5.78 10.942a1.708 1.708 0 0 1-2.44 0C9.276 18.867 5.5 14.499 5.5 9.923c0-1.836.737-3.597 2.05-4.895A7.04 7.04 0 0 1 12.5 3a7.04 7.04 0 0 1 4.95 2.028 6.885 6.885 0 0 1 2.05 4.895ZM15.485 9a2.985 2.985 0 1 1-5.97 0 2.985 2.985 0 0 1 5.97 0Z"
      fill={theme.colors.primary[1].normal}
    />
    <Path
      d="m13.72 20.865-.636-.638.635.638Zm-2.44 0 .636-.638-.635.638ZM7.55 5.028l-.633-.64.633.64Zm9.9 0 .633-.64-.633.64Zm-3.095 16.475c1.03-1.027 2.526-2.673 3.77-4.666 1.238-1.983 2.275-4.388 2.275-6.914h-1.8c0 2.05-.85 4.117-2.002 5.961-1.145 1.834-2.538 3.372-3.514 4.343l1.27 1.276Zm-3.71 0a2.608 2.608 0 0 0 3.71 0l-1.27-1.276a.809.809 0 0 1-1.17 0l-1.27 1.276ZM4.6 9.923c0 2.526 1.037 4.93 2.275 6.914 1.244 1.993 2.74 3.64 3.77 4.666l1.27-1.276c-.975-.971-2.368-2.509-3.513-4.343C7.25 14.04 6.4 11.973 6.4 9.924H4.6Zm2.317-5.535A7.785 7.785 0 0 0 4.6 9.923h1.8c0-1.594.64-3.125 1.783-4.255l-1.266-1.28ZM12.5 2.1a7.94 7.94 0 0 0-5.583 2.288l1.266 1.28A6.14 6.14 0 0 1 12.5 3.9V2.1Zm5.583 2.288A7.94 7.94 0 0 0 12.5 2.1v1.8a6.14 6.14 0 0 1 4.317 1.768l1.266-1.28ZM20.4 9.923a7.785 7.785 0 0 0-2.317-5.535l-1.266 1.28A5.985 5.985 0 0 1 18.6 9.923h1.8Zm-7.9 2.962A3.885 3.885 0 0 0 16.385 9h-1.8a2.085 2.085 0 0 1-2.085 2.085v1.8ZM8.614 9a3.885 3.885 0 0 0 3.886 3.885v-1.8A2.085 2.085 0 0 1 10.414 9h-1.8ZM12.5 5.115A3.885 3.885 0 0 0 8.614 9h1.8c0-1.152.934-2.085 2.086-2.085v-1.8ZM16.385 9A3.885 3.885 0 0 0 12.5 5.115v1.8c1.151 0 2.085.933 2.085 2.085h1.8Z"
      fill={theme.colors.primary[1].normal}
    />
  </Svg>
);

export default FocusedBoothIcon;
