import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'faby.house.com',
  appName: 'fabyhouse',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
