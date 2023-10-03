// declare global {
//   namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      PORT: string;
      EBIRD_API_KEY: string;
      // DATABASE_URL: string;
      // add more environment variables and their types here
    }
//   }
// }