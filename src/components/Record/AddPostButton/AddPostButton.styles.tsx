import styled from '@emotion/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Button = styled.Pressable({
  backgroundColor: theme.colors.primary[1].normal,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 90,
  zIndex: 10,
  width: widthPercentage(52),
  height: widthPercentage(52),
  position: 'absolute',
  right: widthPercentage(16),
  top: heightPercentage(600) + getStatusBarHeight(true),
});
