import { defineConfig } from "cypress";
import {addMatchImageSnapshotPlugin} from '@simonsmith/cypress-image-snapshot/plugin'

export default defineConfig({
  e2e: {
    baseUrl:"https://www.pinterest.com.mx/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      addMatchImageSnapshotPlugin(on)
    },
  },
});
