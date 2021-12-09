import {StyleSheet} from 'react-native';
import {scale, verticalScale, Colors} from '../../theme';

const container = {
  flex: 0.8,
  height: verticalScale(44),
  justifyContent: 'center',
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: verticalScale(44),
    backgroundColor: Colors.transparent,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0,
    elevation: 0,
  },
  leftContainer: {
    ...container,
    paddingLeft: scale(16),
  },
  rightContainer: {
    ...container,
    paddingRight: scale(16),
  },
  rightContent: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  body: {
    flex: 5,
    height: verticalScale(44),
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftIcon: {
    height: scale(16),
    width: scale(16),
    alignSelf: 'flex-start',
  },
  rightIcon: {
    height: scale(16),
    width: scale(16),
    resizeMode: 'contain',
    alignSelf: 'flex-end',
  },
  divider: {
    bottom: 0,
    position: 'absolute',
    height: 1,
    width: '100%',
    backgroundColor: Colors.transparent,
  },
  progress: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden',
  },
  innerProgressCompleted: {
    height: verticalScale(5),
    backgroundColor: Colors.progressCompleted,
  },
  innerProgressRemaining: {
    height: verticalScale(5),
    backgroundColor: Colors.progressRemaining,
  },
  trackingControls: {
    alignSelf: 'center',
    position: 'absolute',
   // top: verticalScale(45),
    width: '100%',
    backgroundColor: Colors.transparent,
  },
});

export default styles;
