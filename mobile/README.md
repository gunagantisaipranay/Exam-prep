# Exam Prep Mobile App

React Native mobile application for exam preparation built with Expo.

## Features

- 📱 **Native Mobile Experience** - iOS and Android support
- 🎨 **Modern UI** with dark/light theme
- 📊 **Performance Charts** with React Native Chart Kit
- ⭕ **Circular Progress** indicators
- 🎯 **All Exam Categories** - GATE, UPSC, JEE, Banking
- 📝 **2,650+ PYQs** available offline
- 🤖 **AI Study Planner** integration
- 📈 **Statistics Tracking** with visual graphs
- 🔐 **Secure Authentication**
- 💾 **Offline Support** with AsyncStorage

## Tech Stack

- **React Native** - Mobile framework
- **Expo** - Development platform
- **TypeScript** - Type safety
- **React Navigation** - Navigation
- **React Native Chart Kit** - Charts
- **react-native-circular-progress** - Progress indicators
- **AsyncStorage** - Local storage
- **Axios** - API calls

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Expo Go app on your phone (for testing)

## Setup Instructions

### 1. Install Dependencies

```bash
cd mobile
npm install
```

### 2. Configure API URL

Edit `app.json` and update the `extra.apiUrl`:

```json
{
  "extra": {
    "apiUrl": "http://your-computer-ip:5000/api"
  }
}
```

**Note:** Replace `your-computer-ip` with your actual local IP address. Do not use `localhost` as it won't work on physical devices.

### 3. Start Development Server

```bash
npm start
```

Or specific platform:

```bash
npm run android  # For Android
npm run ios      # For iOS (Mac only)
npm run web      # For web preview
```

### 4. Test on Device

1. Install **Expo Go** app on your iOS/Android device
2. Scan the QR code shown in terminal
3. App will load on your device

## Project Structure

```
mobile/
├── src/
│   ├── screens/
│   │   ├── LandingScreen.tsx
│   │   ├── ExamListScreen.tsx
│   │   ├── DashboardScreen.tsx
│   │   └── ...
│   ├── components/
│   │   ├── ExamCard.tsx
│   │   ├── CircularStat.tsx
│   │   └── ...
│   ├── navigation/
│   │   └── AppNavigator.tsx
│   ├── services/
│   │   └── api.ts
│   ├── context/
│   │   ├── AuthContext.tsx
│   │   └── ThemeContext.tsx
│   └── utils/
│       └── helpers.ts
├── App.tsx
├── app.json
├── package.json
└── tsconfig.json
```

## Key Features

### Navigation
Uses React Navigation with native stack navigator for smooth transitions.

### Offline Storage
AsyncStorage for caching user data and questions for offline access.

### Charts & Analytics
React Native Chart Kit for beautiful performance visualizations.

### Theme Support
Automatic light/dark mode based on system preference.

## Available Screens (Coming Soon)

- **Landing** - Welcome screen with exam categories
- **Exam List** - Browse all available exams
- **Exam Detail** - Detailed exam information
- **Syllabus** - Complete syllabus breakdown
- **Tips** - Preparation tips and strategies
- **PYQ Browser** - Filter and practice PYQs
- **Quiz** - Interactive quiz interface
- **Results** - Detailed performance analysis
- **Dashboard** - Analytics with charts
- **Study Planner** - AI-generated study plan
- **Profile** - User profile and settings

## Development Tips

### Hot Reloading
Expo provides instant reload when you save files.

### Debugging
- Shake device to open developer menu
- Press `d` in terminal to open DevTools

### Testing
Test on both iOS and Android devices for best coverage.

## Building for Production

### Android APK
```bash
expo build:android
```

### iOS IPA (Requires Apple Developer Account)
```bash
expo build:ios
```

### Publish to Expo
```bash
expo publish
```

## API Integration

Configure the API URL in `app.json`:

```json
{
  "extra": {
    "apiUrl": "https://your-backend-url.com/api"
  }
}
```

Access in code:
```typescript
import Constants from 'expo-constants';
const API_URL = Constants.expoConfig?.extra?.apiUrl;
```

## Common Issues

### Metro Bundler Issues
```bash
expo start -c  # Clear cache
```

### Connection Issues
- Ensure phone and computer are on same WiFi
- Use your computer's local IP, not localhost
- Check firewall settings

## Deployment

### Google Play Store
1. Build APK: `expo build:android -t apk`
2. Sign the APK
3. Upload to Play Console

### Apple App Store
1. Build IPA: `expo build:ios`
2. Use Xcode or Application Loader
3. Submit for review

## License

MIT
