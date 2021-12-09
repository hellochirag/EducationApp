import React from 'react';
import styles from './styles/GradientContentStyle';
import LinearGradient from 'react-native-linear-gradient';
import {Pressable, View, Text, Animated} from 'react-native';
import {Icons, Images} from '../theme';
import {Strings} from '../constants';
//
const GradientContent = ({
  showFrontShadow = false,
  headerGradientColors = [
    'rgba(28,20,56,0.1)',
    'rgba(28,20,56,0.2)',
    'rgba(84,73,120,0.0)',
  ],
  footerGradientColors = [
    'rgba(84,73,120,0.0)',
    'rgba(28,20,56,0.4)',
    'rgba(28,20,56,0.7)',
  ],
  onBookmarkIconPress,
  onMicIconPress,
  onContinuePress,
  isSpeak = true,
  isContinue = true,
}) => (
  <>
    <LinearGradient
      colors={headerGradientColors}
      start={{x: 1, y: 0}}
      end={{x: 0, y: 0}}
      useAngle
      angle={180}
      style={styles.topContainer}
    />
    {/* <LinearGradient
      colors={footerGradientColors}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 1}}
      useAngle
      angle={180}
      style={
        showFrontShadow
          ? styles.frontShadowBottomContainer
          : styles.backShadowBottomContainer
      }
    /> */}

    <Animated.View style={styles.questionContainer}>
      <View style={styles.bookmarkContent}>
        <Text style={styles.labelText}>
          {isSpeak && !isContinue ? Strings.speakNow : ''}
        </Text>
        <Pressable onPress={onBookmarkIconPress}>
          <Animated.Image
            source={Icons.bookmark}
            style={styles.icon}
            resizeMode={'cover'}
          />
        </Pressable>
      </View>
      <View style={styles.speakNowContent}>
        {!isSpeak && (
          <Animated.Image
            source={Icons.speaker}
            style={styles.icon}
            resizeMode={'cover'}
          />
        )}
        {!isSpeak && (
          <Text style={styles.questionText}>{Strings.question}</Text>
        )}
        {isSpeak && !isContinue && (
          <Text style={styles.blueText}>
            {Strings.laEstamos}{' '}
            <Text style={styles.questionText}>{Strings.haciendo}</Text>
          </Text>
        )}
      </View>
      {!isSpeak && (
        <>
          <Text style={styles.questionEnglish}>{Strings.queEnglish}</Text>
          <Pressable style={styles.micRounded} onPress={onMicIconPress}>
            <Animated.Image
              source={Icons.mic}
              style={styles.micIcon}
              resizeMode={'contain'}
            />
          </Pressable>
        </>
      )}

      {isContinue && (
        <>
          <Pressable style={styles.gradeRounded} onPress={onMicIconPress}>
            <Text style={styles.gradeText}>A+</Text>
          </Pressable>
          <Text style={styles.wellDone}>{Strings.welDone}</Text>

          <Text style={styles.greenBackgroundText}>{Strings.question}</Text>
        </>
      )}
    </Animated.View>
    {isContinue && (
      <Pressable style={styles.button} onPress={onContinuePress}>
        <Text style={styles.buttonText}>{Strings.continue}</Text>
      </Pressable>
    )}
  </>
);

export default GradientContent;
