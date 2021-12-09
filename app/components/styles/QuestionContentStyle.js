import {StyleSheet} from 'react-native';
import {scale, verticalScale, Colors, Fonts} from '../../theme';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: verticalScale(103),
    backgroundColor: Colors.black,
    position: 'absolute',
    top: verticalScale(40),
    overflow: 'visible',
    borderRadius: scale(12),
    margin: scale(12),
    alignSelf: 'center',
    justifyContent: 'center',
    paddingHorizontal: scale(16),
    paddingVertical: scale(5),
  },
  titleText: {
    color: Colors.white,
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.regular,
    textAlign: 'center',
  },
  subTitleText: {
    color: Colors.white,
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.medium,
    textAlign: 'center',
    marginTop: verticalScale(5),
    opacity: 0.5,
  },
});

export default styles;
