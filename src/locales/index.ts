import enUS from './en-US';
import zhCN from './zh-CN';
import trTR from './tr-TR';
import roRO from './ro-RO';

export type localeType = 'ro-RO' | 'en-US' | 'zh-CN' | 'tr-TR' | 'ro' | 'en' | 'zh' | 'tr';

export default {
  messages: {
    ['en-US']: enUS,
    ['zh-CN']: zhCN,
    ['tr-TR']: trTR,
    ['ro-RO']: roRO,
    ['ro']: roRO,
    ['en']: enUS,
    ['zh']: zhCN,
    ['tr']: enUS,
  },
};
