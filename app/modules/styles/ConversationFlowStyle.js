import {StyleSheet} from 'react-native';
import {scale, verticalScale, Colors, Fonts} from '../../theme';

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '102%',
  },
  bottomShadow: {
    width: '100%',
    height: '50%',
    position: 'absolute',
    bottom: 0,
    opacity: 0.4,
  },
  speakNowContent: {
    flexDirection: 'row',
    backgroundColor: Colors.transparent,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },
});

export default styles;
