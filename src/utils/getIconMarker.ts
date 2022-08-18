import {ImageRequireSource} from 'react-native';

export const getIconMarker = (boothName: string): ImageRequireSource => {
  if (boothName.includes('인생네컷')) {
    return require('src/assets/images/markers/Insang.png');
  } else if (boothName.includes('포토그레이')) {
    return require('src/assets/images/markers/Photogray.png');
  } else if (boothName.includes('포토이즘')) {
    return require('src/assets/images/markers/Photoism.png');
  } else if (boothName.includes('하루필름')) {
    return require('src/assets/images/markers/Harufilm.png');
  } else if (boothName.includes('셀픽스')) {
    return require('src/assets/images/markers/Selfix.png');
  } else {
    return require('src/assets/images/markers/Common.png');
  }
};
