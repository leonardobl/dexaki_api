declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    DATABASE_URL: string;
    DATABASE_USER: string;
    DATABASE_NAME: string;
    DATABASE_PASSWORD: string;
    SERVER_PORT: number;
  }
}
