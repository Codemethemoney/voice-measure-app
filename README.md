# Backend

## Overview
Backend service for the Voice Measurement App, handling data processing, storage, and synchronization for field measurements.

### Key Features
- RESTful API endpoints for measurement data
- Real-time data synchronization
- User authentication and authorization
- Offline data reconciliation
- PostgreSQL database integration

### Tech Stack
- Node.js & Express.js
- PostgreSQL
- JWT Authentication
- WebSocket for real-time updates

### Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

3. Run database migrations:
```bash
npm run migrate
```

4. Start development server:
```bash
npm run dev
```

### Project Structure
```
/src
  /controllers   # Request handlers
  /models        # Database models
  /routes        # API route definitions
  /middleware    # Custom middleware
/tests          # Unit and integration tests
```

### Available Scripts
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm start`: Run production server
- `npm test`: Run tests
- `npm run migrate`: Run database migrations
- `npm run lint`: Check code style

---

# Frontend (Web Dashboard)

## Overview
Web dashboard for managers to view and analyze field measurements in real-time.

### Key Features
- Real-time measurement dashboard
- User management interface
- Analytics and reporting
- Responsive design

### Tech Stack
- React.js
- Material-UI
- Redux for state management
- Chart.js for data visualization

### Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

3. Start development server:
```bash
npm start
```

### Project Structure
```
/src
  /components   # Reusable UI components
  /services     # API and external service integration
  /utils        # Helper functions and utilities
/tests         # Unit and integration tests
```

### Available Scripts
- `npm start`: Start development server
- `npm build`: Build for production
- `npm test`: Run tests
- `npm run lint`: Check code style

### Environment Configuration
- `REACT_APP_API_URL`: Backend API URL
- `REACT_APP_WS_URL`: WebSocket server URL

---

# Mobile App

## Overview
Mobile application for field operators to record measurements using voice input.

### Key Features
- Voice-enabled measurement input
- Offline functionality
- Real-time data synchronization
- Audible feedback system

### Tech Stack
- React Native
- Google Cloud Speech-to-Text API
- AsyncStorage for offline data
- Redux for state management

### Getting Started

1. Install dependencies:
```bash
npm install
```

2. Install iOS dependencies:
```bash
cd ios && pod install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start development:
```bash
# For iOS
npm run ios

# For Android
npm run android
```

### Project Structure
```
/src
  /components   # Reusable UI components
  /services     # API and voice recognition services
  /utils        # Helper functions and utilities
/tests         # Unit and integration tests
```

### Available Scripts
- `npm run ios`: Run iOS simulator
- `npm run android`: Run Android emulator
- `npm test`: Run tests
- `npm run lint`: Check code style

### Environment Configuration
- `API_URL`: Backend API URL
- `WS_URL`: WebSocket server URL
- `GOOGLE_CLOUD_API_KEY`: Google Cloud API key

### Build and Deployment
#### iOS
1. Update version in `ios/YourApp.xcodeproj/project.pbxproj`
2. Build release:
```bash
npm run build:ios
```

#### Android
1. Update version in `android/app/build.gradle`
2. Build release:
```bash
npm run build:android
```

---

# Common Development Guidelines

## Code Style
- Follow ESLint configuration
- Use Prettier for code formatting
- Write meaningful commit messages

## Testing
- Write unit tests for new features
- Maintain minimum 80% code coverage
- Run full test suite before committing

## Version Control
- Create feature branches from `development`
- Submit pull requests for review
- Squash commits before merging

## Documentation
- Document all new features and APIs
- Update README files when needed
- Use JSDoc for code documentation
