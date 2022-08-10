import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from 'src/redux/store';
import NextButtonOrganism from '../NextButtonOrganism';

const SelectTagNextButton = () => {
  const {tags} = useSelector((state: RootState) => state.postWriteReducer);

  const disabledPressableSubmit = tags
    .map((tag: any) => Object.entries(tag))
    .flat()
    .every(([_, selected]: any) => !selected);

  return (
    <NextButtonOrganism screenName="InputTag" nextIndex={1} disabled={disabledPressableSubmit} />
  );
};

export default SelectTagNextButton;
