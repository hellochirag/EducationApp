# EducationApp Trial

Repo for our React Native mobile apps (iOS + Android).

**Project Name**: `EducationApp`

**Bundle Id**: `com.educationapp`  
**Package Name**: `com.educationapp`

[![license](https://img.shields.io/badge/LICENSE-MIT-brightgreen)](https://opensource.org/licenses/mit-license.html) [![react-native](https://img.shields.io/badge/react--native-65.0.1-brightgreen)](https://facebook.github.io/react-native/docs/0.66/getting-started)


## Prerequisites

**iOS** : XCode(12.2) onwards

**Android** : Android Studio(3.4) with gradle(5.1.1) onwards

**Editor** : Visual Studio Code

## Main technologies used

- **Framework:** [React Native](https://github.com/facebook/react-native)

## How to Setup Project

**Step 1:** Clone this repository.

**Step 2:** Go to the cloned repo and open in terminal.

**Step 3:** Install the dependencies with `$ npm i`

**Step 4:** Run the npm script to install the cocoapods `$ npm run pod-install`


## How to Run the Project

1. Install dependencies
    ```bash
    npm i ; cd ios ; pod install ; cd ..
    ```
1. Run and build for either OS. (Replace `npm` with `npx` if you don't have these packages installed globally, [reference](https://www.freecodecamp.org/news/npm-vs-npx-whats-the-difference/.))
    * Run iOS app
        ```bash
        npx react-native run-ios
        ```
      To run in a specific simulatory, run
      ```bash
      npx react-native run-ios --simulator="iPhone 11 Pro (14.4)"
       ```
    * Run Android app
      * Start Genymotion or Native emulator
      ```bash
      npm run android // runs -debug by default
    * Note: These npm scripts will lint your code first. If there are no lint errors, then it will run the iOS or Android app. Otherwise it will show the lint errors in the terminal.

## Frequent Build issues

- Make sure you're running **Node 15.9.0+**. You can run `nvm list` to see the different versions of Node on your machine. Then run `nvm use 15.9.0` to run that specific version, which will only be used in your current terminal session.

