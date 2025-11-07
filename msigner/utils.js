
/* eslint-disable */
import { HttpsProxyAgent } from 'https-proxy-agent';

class Utils {
  static getRandomInt(a, b) {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    const diff = max - min + 1;
    return min + Math.floor(Math.random() * Math.floor(diff));
  }

  static generateVerifyFp() {
    // return 'verify_lvzx7ekg_2rbbCJeM_Lm1j_4nNU_9RRX_4a9U0iUyARKp'
    // return 'verify_5b161567bda98b6a50c0414d99909d4b'; // !!! NOT SURE IF EXPIRE
    var e = Date.now();
    var t = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(
        ''
      ),
      e = t.length,
      n = Date.now().toString(36),
      r = []; 
    (r[8] = r[13] = r[18] = r[23] = '_'), (r[14] = '4');
    for (var o = 0, i = void 0; o < 36; o++)
      r[o] ||
        ((i = 0 | (Math.random() * e)), (r[o] = t[19 == o ? (3 & i) | 8 : i]));
    return 'verify_' + n + '_' + r.join('');
  }

  static generateDeviceId(length = 19) {
    let deviceId = '';
  
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < length; i++) {
      deviceId += Math.floor(Math.random() * 10);
    }
    return deviceId;
  }

  static getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  static generateAgent() {

    const languages = ['en', 'es', 'fr', 'de', 'it'];
    const regions = ['AR', 'US', 'GB', 'DE', 'FR', 'IT'];
    const osOptions = ['windows', 'mac', 'linux'];
    const platforms = ['Win32', 'Win64', 'MacIntel', 'Linux x86_64'];

    const app_language = this.getRandomElement(languages);
    const browser_language = `${app_language}-${this.getRandomElement(['US', 'GB', 'DE', 'FR', 'IT'])}`;
    const browser_name = this.getRandomElement(['Mozilla', 'Chrome', 'Safari', 'Edge', 'Opera']);
    const browser_online = Math.random() < 0.5 ? 'true' : 'false';
    const browser_platform = this.getRandomElement(platforms);
    const browser_version = `${this.getRandomInt(1, 100)}.0 (${browser_platform}) AppleWebKit/${this.getRandomInt(500, 600)}.36 (KHTML, like Gecko) Chrome/${this.getRandomInt(70, 125)}.0.0.0 Safari/${this.getRandomInt(500, 600)}.36`;
    const os = this.getRandomElement(osOptions);
    const region = this.getRandomElement(regions);
    const screen_height = this.getRandomInt(720, 2160).toString();
    const screen_width = this.getRandomInt(1280, 3840).toString();

    return {
      app_language,
      browser_language,
      browser_name,
      browser_online,
      browser_platform,
      browser_version,
      os,
      region,
      device_id: this.generateDeviceId(),
      screen_height: screen_height.toString(),
      screen_width: screen_width.toString()
    };
  }

  static parseCookies(cookieArray) {
    return cookieArray
      .map(cookie => cookie.split(';')[0]) // Get only the name=value part
      .join('; '); // Join them with "; "
  }
}

export default Utils;
