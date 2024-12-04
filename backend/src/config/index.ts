import env from './env';

const config = {
  app: {
    env: env.NODE_ENV,
    port: env.PORT,
    apiPrefix: env.API_PREFIX,
    rateLimitWindow: env.RATE_LIMIT_WINDOW,
    rateLimitMax: env.RATE_LIMIT_MAX,
  },

  db: {
    url: `postgresql://${env.DB_USER}:${env.DB_PASSWORD}@${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}`,
    ssl: env.DB_SSL,
    maxConnections: env.DB_MAX_CONNECTIONS,
    idleTimeout: env.DB_IDLE_TIMEOUT,
  },

  jwt: {
    secret: env.JWT_SECRET,
    expiresIn: env.JWT_EXPIRES_IN,
    refreshExpiresIn: env.JWT_REFRESH_EXPIRES_IN,
    cookieExpiresIn: env.JWT_COOKIE_EXPIRES_IN,
  },

  googleCloud: {
    projectId: env.GOOGLE_CLOUD_PROJECT_ID,
    credentials: env.GOOGLE_CLOUD_CREDENTIALS,
    speechToText: {
      languageCode: env.SPEECH_TO_TEXT_LANGUAGE_CODE,
    },
  },

  websocket: {
    port: env.WS_PORT,
    path: env.WS_PATH,
    heartbeatInterval: env.WS_HEARTBEAT_INTERVAL,
  },

  security: {
    cors: {
      origin: env.CORS_ORIGIN,
      methods: env.CORS_METHODS.split(','),
    },
    rateLimit: {
      enabled: env.RATE_LIMIT_ENABLED,
    },
    tls: env.TLS_ENABLED,
  },

  logging: {
    level: env.LOG_LEVEL,
    format: env.LOG_FORMAT,
    file: {
      enabled: env.LOG_FILE_ENABLED,
      path: env.LOG_FILE_PATH,
    },
  },

  email: env.EMAIL_SERVICE ? {
    service: env.EMAIL_SERVICE,
    host: env.EMAIL_HOST,
    port: env.EMAIL_PORT,
    secure: env.EMAIL_SECURE,
    auth: {
      user: env.EMAIL_USERNAME,
      pass: env.EMAIL_PASSWORD,
    },
    from: env.EMAIL_FROM,
  } : null,

  monitoring: {
    sentry: env.SENTRY_DSN ? {
      dsn: env.SENTRY_DSN,
      environment: env.SENTRY_ENVIRONMENT,
    } : null,
    metrics: env.METRICS_ENABLED,
    profiler: env.PROFILER_ENABLED,
  },

  cache: {
    redis: {
      host: env.REDIS_HOST,
      port: env.REDIS_PORT,
      password: env.REDIS_PASSWORD,
      db: env.REDIS_DB,
    },
    ttl: env.CACHE_TTL,
  },

  features: {
    offlineMode: env.FEATURE_OFFLINE_MODE,
    voiceRecognition: env.FEATURE_VOICE_RECOGNITION,
    realTimeSync: env.FEATURE_REAL_TIME_SYNC,
    emailNotifications: env.FEATURE_EMAIL_NOTIFICATIONS,
  },
} as const;

export default config;
