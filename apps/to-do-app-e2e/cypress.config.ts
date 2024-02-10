import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run to-do-app:serve',
        production: 'nx run to-do-app:preview',
      },
      ciWebServerCommand: 'nx run to-do-app:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
