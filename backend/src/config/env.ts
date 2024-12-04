import { cleanEnv, str, num, bool, url, email, port } from 'envalid';

const env = cleanEnv(process.env, {
  // Application
  NODE_ENV: str({ choices: ['development', 'test', 'production'] }),
  PORT: port({ default: 3000 }),
  API_PREFIX: str({ default: '/api/v1' }),
  RATE_LIMIT_WINDOW: num({ default: 15 }),
  RATE_LIMIT_MAX: num({ default: 100 }),

  // Database
  DB_HOST: str(),
  DB_PORT: port({ default: 5432 }),
  DB_NAME: str(),
  DB_USER: str(),
  DB_PASSWORD: str(),
  DB_SSL: bool({ default: false }),
  DB_MAX_CONNECTIONS: num({ default: 10 }),
  DB_IDLE_TIMEOUT: num({ default: 10000 }),

  // JWT
  JWT_SECRET: str({ minLength: 32 }),
  JWT_EXPIRES_IN: str({ default: '1d' }),
  JWT_REFRESH_EXPIRES_IN: str({ default: '7d' }),
  JWT_COOKIE_EXPIRES_IN: num({ default: 7 }),

  // Google Cloud
  GOOGLE_CLOUD_PROJECT_ID: str(),
  GOOGLE_CLOUD_CREDENTIALS: str(),
  SPEECH_TO_TEXT_LANGUAGE_CODE: str({ default: 'en-US' }),

  // WebSocket
  WS_PORT: port({ default: 3001 }),
  WS_PATH: str({ default: '/ws' }),
  WS_HEARTBEAT_INTERVAL: num({ default: 30000 }),

  // Security
  CORS_ORIGIN: str({ default: 'http://localhost:3000' }),
  CORS_METHODS: str({ default: 'GET,HEAD,PUT,PATCH,POST,DELETE' }),
  RATE_LIMIT_ENABLED: bool({ default: true }),
  TLS_ENABLED: bool({ default: false }),

  // Logging
  LOG_LEVEL: str({
    choices: ['error', 'warn', 'info', 'http', 'verbose', 'debug', 'silly'],
    default: 'debug'
  }),
  LOG_FORMAT: str({ default: 'combined' }),
  LOG_FILE_ENABLED: bool({ default: false }),
  LOG_FILE_PATH: str({ default: 'logs/app.log' }),

  // Email (Optional)
  EMAIL_SERVICE: str({ default: undefined }),
  EMAIL_HOST: str({ default: undefined }),
  EMAIL_PORT: port({ default: 587 }),
  EMAIL_SECURE: bool({ default: true }),
  EMAIL_USERNAME: email({ default: undefined }),
  EMAIL_PASSWORD: str({ default: undefined }),
  EMAIL_FROM: email({ default: undefined }),

  // Error Reporting & Monitoring
  SENTRY_DSN: url({ default: undefined }),
  SENTRY_ENVIRONMENT: str({ default: 'development' }),
  METRICS_ENABLED: bool({ default: false }),
  PROFILER_ENABLED: bool({ default: false }),

  // Cache
  REDIS_HOST: str({ default: 'localhost' }),
  REDIS_PORT: port({ default: 6379 }),
  REDIS_PASSWORD: str({ default: '' }),
  REDIS_DB: num({ default: 0 }),
  CACHE_TTL: num({ default: 3600 }),

  // Feature Flags
  FEATURE_OFFLINE_MODE: bool({ default: true }),
  FEATURE_VOICE_RECOGNITION: bool({ default: true }),
  FEATURE_REAL_TIME_SYNC: bool({ default: true }),
  FEATURE_EMAIL_NOTIFICATIONS: bool({ default: false }),
});

export default env;
