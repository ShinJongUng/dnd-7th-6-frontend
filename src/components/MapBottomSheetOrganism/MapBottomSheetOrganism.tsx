import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import React, {useMemo, useRef} from 'react';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

import BoothSummaryView from '../BoothSummaryView';
import MapNaverMapOrganism from '../MapNaverMapOrganism';
import {BottomSheetConatiner, bottomSheetStyle, handleStyle} from './MapBottomSheetOrganism.styles';

import BoothSummaryData from 'src/BoothSummaryData';
import {RootState} from 'src/redux/store';
import {heightPercentage} from 'src/styles/ScreenResponse';

const MapBottomSheetOrganism = () => {
  const sheetIndex = useSelector((state: RootState) => state.mapReducer.bottomSheetHeightIndex);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(
    () => [heightPercentage(145), heightPercentage(400), heightPercentage(630)],
    [],
  );

  return (
    <BottomSheetConatiner>
      <BottomSheet
        style={bottomSheetStyle}
        snapPoints={snapPoints}
        ref={bottomSheetRef}
        backdropComponent={MapNaverMapOrganism}
        handleIndicatorStyle={handleStyle}
        enableContentPanningGesture={true}
        index={sheetIndex}>
        <BottomSheetFlatList
          data={BoothSummaryData}
          renderItem={info => <BoothSummaryView {...info.item} key={info.item.id} />}
        />
      </BottomSheet>
    </BottomSheetConatiner>
  );
};

export default gestureHandlerRootHOC(MapBottomSheetOrganism);
