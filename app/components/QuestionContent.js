import React from 'react';
import {Text,  Animated} from 'react-native';
import styles from './styles/QuestionContentStyle';
import {StaticData} from '../constants';
const QuestionContent = ({isVisible = false}) => (
  <>
    {isVisible && (
      <Animated.View style={styles.container}>
        <Text style={styles.titleText}>{StaticData.questions[0].spanish}</Text>
        <Text style={styles.subTitleText}>
          {StaticData.questions[0].english}
        </Text>
      </Animated.View>
    )}
  </>
);

export default QuestionContent;
