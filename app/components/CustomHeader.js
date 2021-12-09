import PropTypes from 'prop-types';
import React from 'react';
import {Pressable, View, Animated} from 'react-native';
import styles from './styles/CustomHeaderStyles';

const leftSection = (leftIcon, onLeftIconPress, leftIconStyle) => (
  <Pressable onPress={onLeftIconPress}>
    {leftIcon && (
      <Animated.Image
        source={leftIcon}
        style={[styles.leftIcon, leftIconStyle]}
        resizeMode={'cover'}
      />
    )}
  </Pressable>
);

const rightSection = (rightIcon, onRightIconPress, rightIconStyle) => (
  <View style={styles.rightContent}>
    <Pressable onPress={onRightIconPress}>
      {rightIcon && (
        <Animated.Image
          source={rightIcon}
          style={[styles.rightIcon, rightIconStyle]}
          resizeMode={'cover'}
        />
      )}
    </Pressable>
  </View>
);

const CustomHeader = ({
  leftIcon,
  rightIcon,
  onLeftIconPress,
  onRightIconPress,
  headerStyle,
  isBorderVisible,
  rightIconStyle,
  leftIconStyle,
  flexCompleted,
  flexRemaining,
}) => (
  <>
    <Animated.View style={[styles.header, headerStyle]}>
      <View style={styles.leftContainer}>
        {leftSection(leftIcon, onLeftIconPress, leftIconStyle)}
      </View>
      <View style={styles.body}>
        <View style={styles.trackingControls}>
          <View style={styles.progress}>
            <View
              style={[styles.innerProgressCompleted, {flex: flexCompleted}]}
            />
            <View
              style={[styles.innerProgressRemaining, {flex: flexRemaining}]}
            />
          </View>
        </View>
      </View>
      <View style={styles.rightContainer}>
        {rightSection(rightIcon, onRightIconPress, rightIconStyle)}
      </View>
      {isBorderVisible && <View style={styles.divider} />}
    </Animated.View>
  </>
);

CustomHeader.propTypes = {
  leftIcon: PropTypes.number,
  rightIcon: PropTypes.number,
  onLeftIconPress: PropTypes.func,
  onRightIconPress: PropTypes.func,
  headerStyle: PropTypes.any,
  isBorderVisible: PropTypes.bool,
  rightIconStyle: PropTypes.any,
  leftIconStyle: PropTypes.any,
  disableRightOnPress: PropTypes.bool,
  flexCompleted: PropTypes.any,
  flexRemaining: PropTypes.any,
};

export default CustomHeader;
