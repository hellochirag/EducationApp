import {moderateScale} from './Metrics';

const type = {
  bold: 'SF-Pro-Round-Bold',
  semiBold: 'SF-Pro-Round-Light',
  medium: 'SF-Pro-Round-Medium',
  regular: 'SF-Pro-Round-Regular',
};

const size = {
  tiny: moderateScale(10),
  small: moderateScale(12),
  medium: moderateScale(14),
  tabLabel: moderateScale(15),
  label: moderateScale(16),
  regular: moderateScale(17),
  input: moderateScale(18),
  extraLarge: moderateScale(22),
  header: moderateScale(24),
};

export default {
  type,
  size,
};
