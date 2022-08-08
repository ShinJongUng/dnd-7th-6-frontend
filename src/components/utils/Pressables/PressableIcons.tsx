import styled from '@emotion/native';
import React from 'react';
import {PressableProps} from 'react-native';

import BottomArrowIcon from 'src/icons/BottomArrowIcon';
import CancelIcon from 'src/icons/CancelIcon';
import DeleteIcon from 'src/icons/DeleteIcon';
import LeftArrowIcon from 'src/icons/LeftArrowIcon';
import LikeIcon from 'src/icons/LikeIcon';
import RefreshIcon from 'src/icons/RefreshIcon';
import RightArrowIcon from 'src/icons/RightArrowIcon';
import SearchIcon from 'src/icons/SearchIcon';
import StarIcon from 'src/icons/StarIcon';
import UploadIcon from 'src/icons/UploadIcon';

const PressableIcon = styled.Pressable({
  alignSelf: 'flex-start',
});

const makePressableComponent = (IconComponent: React.FC) => (props: PressableProps) => {
  return (
    <PressableIcon {...props}>
      <IconComponent />
    </PressableIcon>
  );
};

export const PressableUploadIcon = makePressableComponent(UploadIcon);
export const PressableLikeIcon = makePressableComponent(LikeIcon);
export const PressableRightArrowIcon = makePressableComponent(RightArrowIcon);
export const PressableSearchIcon = makePressableComponent(SearchIcon);
export const PressableLeftArrowIcon = makePressableComponent(LeftArrowIcon);
export const PressableDeleteIcon = makePressableComponent(DeleteIcon);
export const PressableBottomArrowIcon = makePressableComponent(BottomArrowIcon);
export const PressableCancelIcon = makePressableComponent(CancelIcon);
export const PressableRefreshIcon = makePressableComponent(RefreshIcon);
export const PressableStarIcon = makePressableComponent(StarIcon);
