import { defineUserConfig } from 'vuepress';
import theme from './theme.js';

export default defineUserConfig({
  base: '/kite-notes/',

  lang: 'zh-CN',
  title: 'kite-notes',
  description: 'some notes about development.',

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
