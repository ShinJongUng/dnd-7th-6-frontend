import {type Coord} from 'react-native-nmap';
import {useQuery} from 'react-query';

import getPhotoBoothLocation from 'src/apis/getPhotoBoothLocation';

const useGetPhotoBoothLocation = ({
  coord,
  selectTagArr = [],
}: {
  coord: Coord;
  selectTagArr?: (number | undefined)[];
}) => {
  return useQuery(
    ['photo-booth'],
    () => getPhotoBoothLocation({...coord, distance: 3, tagIdSet: selectTagArr}),
    {
      onError: error => console.log(error),
      enabled: false,
      staleTime: Infinity,
    },
  );
};

export default useGetPhotoBoothLocation;
