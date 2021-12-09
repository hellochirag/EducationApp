/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {SafeAreaView, StatusBar, ImageBackground} from 'react-native';
import {CustomHeader, GradientContent, QuestionContent} from './components';
import {Icons, Images} from './theme';
import styles from './modules/styles/ConversationFlowStyle';
import LinearGradient from 'react-native-linear-gradient';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paused: false,
      duration: 10.0,
      currentTime: 2.0,
      isSpeak: true,
    };
  }

  getCurrentTimePercentage() {
    if (this.state.currentTime > 0) {
      return (
        parseFloat(this.state.currentTime) / parseFloat(this.state.duration)
      );
    } else {
      return 0;
    }
  }

  render() {
    const flexCompleted = this.getCurrentTimePercentage() * 100;
    const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;
    const {isSpeak} = this.state;
    return (
      <SafeAreaView forceInset={{top: 'never', bottom: 'never'}}>
        <StatusBar />
        <ImageBackground
          source={Images.background}
          resizeMode="cover"
          style={styles.backgroundImage}>
          <CustomHeader
            leftIcon={Icons.close}
            rightIcon={Icons.menu}
            onLeftIconPress={() => console.log('Left Icon Clicked..')}
            onRightIconPress={() => console.log('Left Icon Clicked..')}
            flexCompleted={flexCompleted}
            flexRemaining={flexRemaining}
          />
          <QuestionContent />

          {!isSpeak && (
            <GradientContent
              showFrontShadow={false}
              onBookmarkIconPress={() => console.log('Bookmark Clicked..')}
              onMicIconPress={() => console.log('Mic Clicked... ')}
            />
          )}
        </ImageBackground>
        <LinearGradient
          colors={[
            'rgba(14,160,55,0.1)',
            'rgba(14,160,55,1)',
            'rgba(14,160,55,1)',
          ]}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          useAngle
          angle={180}
          style={styles.bottomShadow}
        />
        {isSpeak && (
          <GradientContent
            showFrontShadow={false}
            onBookmarkIconPress={() => console.log('Bookmark Clicked..')}
            onMicIconPress={() => console.log('Mic Clicked... ')}
          />
        )}
      </SafeAreaView>
    );
  }
}

export default App;
