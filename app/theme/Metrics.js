/*
 * platform/application wide metrics for proper styling
 */
import {Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('window');

const Metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === 'ios' ? 54 : 66,
};

const WINDOW = Dimensions.get('window');

const isPhoneX =
  Platform.OS === 'ios' && (WINDOW.height === 812 || WINDOW.height === 896);

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;

const moderateScale = size => {
  const mHeight =
    Platform.OS === 'ios'
      ? isPhoneX
        ? WINDOW.height - 78
        : WINDOW.height
      : WINDOW.height - 24;
  return ((size - 2) * mHeight) / 667;
};

export {scale, verticalScale, moderateScale, Metrics, WINDOW};
