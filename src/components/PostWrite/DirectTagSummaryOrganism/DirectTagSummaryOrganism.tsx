import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';

import ContentSection from '../ContentSection';

import {PostWriteParamList} from 'src/screens/RecommendScreen/PostWriteScreen';

interface Props {
  navigation: NativeStackNavigationProp<PostWriteParamList, 'Summary', undefined>;
}

const DirectTagSummaryOrganism = ({navigation}: Props) => {
  const handlePressModifyButton = () => {
    navigation.push('CustomTag' as never, {isModifyMode: true} as never);
  };

  return (
    <>
      <ContentSection
        title="직접 태그 "
        subTitle=" (최대 4개)"
        onPressRightIcon={handlePressModifyButton}
      />
    </>
  );
};

export default DirectTagSummaryOrganism;
