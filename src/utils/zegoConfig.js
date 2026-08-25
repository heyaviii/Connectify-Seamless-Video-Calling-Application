// ZegoCloud Configuration
// Get your App ID and Server Secret from: https://console.zegocloud.com/
// 1. Create a free account at zegocloud.com
// 2. Go to Dashboard > Create Project
// 3. Copy App ID (number) and Server Secret (string)
// 4. Replace the values below with your credentials

export const ZEGO_CONFIG = {
  appID: parseInt(import.meta.env.VITE_ZEGO_APP_ID || '0'),
  serverSecret: import.meta.env.VITE_ZEGO_SERVER_SECRET || '',
}

export const isZegoConfigured = () => {
  return ZEGO_CONFIG.appID !== 0 && ZEGO_CONFIG.serverSecret !== ''
}
