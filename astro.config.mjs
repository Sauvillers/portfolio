import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
import icon from "astro-icon";

import { SITE } from './src/config.ts';

export default defineConfig({
    site: SITE,
    integrations: [
        tailwind(),
        partytown({
            config: { forward: ['dataLayer.push'] },
          }),
        icon({
            iconDir: 'src/assets/icons',
        }),
    ],
    image: {
        domains: [
            'nexusmods.com'
        ],
        remotePatterns: [{ protocol: 'https' }],
    }
});
