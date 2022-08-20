import styled from '@emotion/native';

import {BodyText3} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const NickNameContainer = styled.View({
  width: '100%',
  height: heightPercentage(16),
  marginTop: heightPercentage(11),
  alignItems: 'center',
  flexDirection: 'row',
});

export const NickNameImageWrapper = styled.View({
  marginLeft: widthPercentage(16),
  alignItems: 'center',
});

export const NickNamenIconWrapper = styled.Pressable({
  height: heightPercentage(24),
  flexDirection: 'row',
  marginTop: heightPercentage(4),
});

export const NickNameText = styled(BodyText3)({
  color: theme.colors.grayscale[8],
  textDecorationLine: 'underline',
});

export const IconWrapper = styled.View({
  marginLeft: widthPercentage(4),
});
