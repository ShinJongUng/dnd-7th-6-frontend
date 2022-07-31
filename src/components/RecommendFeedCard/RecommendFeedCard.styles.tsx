import styled from '@emotion/native';
import {StyleSheet} from 'react-native';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';

export const FeedCardContainer = styled.View({
  width: widthPercentage(166),
  height: heightPercentage(220),
  backgroundColor: '#F6F6F6',
  marginHorizontal: widthPercentage(5.5),
  borderRadius: 12,
  marginVertical: heightPercentage(16),
});

export const IconContainer = styled.View({
  position: 'absolute',
  height: '100%',
  alignSelf: 'flex-end',
  justifyContent: 'flex-end',
  paddingVertical: heightPercentage(16),
  paddingHorizontal: widthPercentage(15),
  borderColor: 'black',
  zIndex: 5,
});

export const styles = StyleSheet.create({
  photoStyle: {
    borderRadius: 12,
    flex: 1,
    zIndex: 2,
  },
});
