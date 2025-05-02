import { defineConfig } from "cypress";


export default defineConfig({
  projectId: '7htw7w',
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--incognito');
        } else if (browser.name === 'firefox') {
          launchOptions.args.push('-private');
        } else if (browser.name === 'edge') {
          launchOptions.args.push('-inprivate');
        }
        return launchOptions;
      }
      );
    },
    baseUrl: "https://e2eburguer.netlify.app/",
    testIsolation: false
  },
});
