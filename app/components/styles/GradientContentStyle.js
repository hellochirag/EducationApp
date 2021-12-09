import {StyleSheet} from 'react-native';
import {scale, verticalScale, Colors, Fonts} from '../../theme';

const bottom = {
  width: '100%',
  height: '50%',
  backgroundColor: Colors.transparent,
  position: 'absolute',
  bottom: 0,
};

const label = {
  fontSize: Fonts.size.small,
  fontFamily: Fonts.type.regular,
  textAlign: 'center',
  color: Colors.black,
};

const styles = StyleSheet.create({
  topContainer: {
    width: '100%',
    height: '50%',
    backgroundColor: Colors.transparent,
    position: 'absolute',
    zIndex: -1,
    overflow: 'visible',
    opacity: 0.4,
  },
  backShadowBottomContainer: {
    ...bottom,
    zIndex: -1,
    overflow: 'visible',
    opacity: 0.4,
  },
  frontShadowBottomContainer: {
    ...bottom,
    opacity: 0.4,
    zIndex: -1,
    overlayColor: Colors.blue
  
  },
  questionContainer: {
    width: '90%',
    height: verticalScale(126),
    backgroundColor: Colors.white,
    position: 'absolute',
    bottom: verticalScale(130),
    overflow: 'visible',
    borderRadius: scale(12),
    margin: scale(12),
    alignSelf: 'center',
    paddingHorizontal: scale(16),
    paddingVertical: scale(5),
  },
  bookmarkContent: {
    flexDirection: 'row',
    backgroundColor: Colors.transparent,
    marginTop: verticalScale(5),
  },
  icon: {
    width: scale(16),
    height: scale(16),
  },
  labelText: {
    ...label,
    flex: 1,
    opacity: 0.5,
  },
  speakNowContent: {
    flexDirection: 'row',
    backgroundColor: Colors.transparent,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },
  questionText: {
    ...label,
    fontSize: Fonts.size.regular,
    fontWeight: '500',
    marginLeft: scale(5),
  },
  blueText: {
    ...label,
    fontSize: Fonts.size.regular,
    fontWeight: '500',
    color: Colors.blue
  },
  questionEnglish: {
    ...label,
    fontSize: Fonts.size.small,
    fontWeight: '400',
    opacity: 0.5,
    flex: 2,
    lineHeight: 15,
    marginBottom: verticalScale(10),
  },
  micIcon: {
    width: scale(18),
    height: scale(18),
    alignSelf: 'center',
  },
  micRounded: {
    width: scale(60),
    height: scale(60),
    backgroundColor: Colors.micBackground,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    overflow: 'hidden',
    position: 'absolute',
    bottom: -30,
  },
  button: {
    width: scale(160),
    height: verticalScale(42),
    backgroundColor: Colors.black,
    borderRadius: scale(20),
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    bottom: verticalScale(40),
  },
  buttonText: {
    ...label,
    fontSize: Fonts.size.small,
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  gradeRounded: {
    width: scale(60),
    height: scale(60),
    backgroundColor: Colors.gradeBackground,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    overflow: 'hidden',
    position: 'absolute',
    top: -30,
  },
  gradeText: {
    ...label,
    fontSize: Fonts.size.header,
    color: Colors.white,
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  wellDone: {
    ...label,
    color: Colors.gradeBackground,
    fontSize: Fonts.size.medium,
    fontWeight: 'bold',
    flex: 1,
    position: 'absolute',
    top: verticalScale(40),
    alignSelf: 'center',
  },
  greenBackgroundText: {
    ...label,
    color: Colors.gradeBackground,
    fontSize: Fonts.size.small,
    fontWeight: 'bold',
    flex: 1,
    position: 'absolute',
    bottom: verticalScale(30),
    alignSelf: 'center',
    padding: scale(5),
    backgroundColor: Colors.offGreen,
    borderRadius: scale(10),
    borderWidth: 1,
    borderColor: Colors.offGreen,
  }
});

export default styles;
