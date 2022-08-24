import { Pickle, PickleStep } from '@cucumber/messages';
import { Frameworks } from '@wdio/types';
import { Testrunner } from '@wdio/types/build/Options';
import { LaunchHeadlessMode, Specifications, StepDefinitions } from '../src/data/global-data';
import { Context, getStepStatus } from '../src/helpers/context';

const cucumberJson = require('wdio-cucumberjs-json-reporter').default;

const browserArguments = [
  '--disable-gpu',
  '--no-sandbox',
  'window-size=1920,1080',
  // '--slow-down-raster-scale-factor=500',
  // '--slow-down-compositing-scale-factor=500',
];

if (LaunchHeadlessMode) {
  // browserArguments.push('--headless');
}

// Docs: https://webdriver.io/docs/options | https://webdriver.io/docs/configurationfile/
export const config: Testrunner = {
  runner: 'local',
  logLevel: 'warn',
  maxInstances: 1,
  maxInstancesPerCapability: 1,
  specs: Specifications,
  services: ['chromedriver'],
  framework: 'cucumber',
  reporters: ['spec', ['cucumberjs-json', { jsonFolder: 'reports/features/' }]],
  // Retries failed feature files at the end of test suite
  specFileRetries: 1,
  specFileRetriesDeferred: true,
  capabilities: [
    {
      acceptInsecureCerts: true,
      browserName: 'chrome',
      maxInstances: 1,
      'goog:chromeOptions': { args: browserArguments },
    },
  ],
  // Docs: https://www.npmjs.com/package/@wdio/cucumber-framework?activeTab=readme
  cucumberOpts: {
    format: ['message'],
    require: StepDefinitions,
    timeout: 25 * 1000,
  },
  onPrepare: function () {
    console.log('===== Settings =====');
    console.table({ Environment: Context.getInstance().environment, Client: Context.getInstance().client });
  },
  beforeScenario: function (world: any): void {
    browser.setTimeout({ pageLoad: 10000 });
    cucumberJson.attach('[Current Client] ' + Context.getInstance().client);

    console.log('----------------------------------------------------------------------');
    console.log(`[Current Feature] ${world.gherkinDocument.feature.name}`);
  },
  beforeStep(step: any): void {
    console.log('-----------------------------------');
    console.log(`[Step] ${step.keyword + step.text}`);
    console.log(`[Time (Start)] ${new Date().toISOString()}`);
  },
  afterStep: async function (step: PickleStep, scenario: Pickle, result: Frameworks.PickleResult): Promise<void> {
    console.log(`[Time (End)] ${new Date().toISOString()}`);
    console.log(`[Result] ${getStepStatus(result)}`);

    if (!result.passed) {
      // If test failed do a takeScreenshot
      const pageHeight = await browser.execute(() => this.document.body.scrollHeight);
      const browserHeight = (await browser.execute(() => this.window.innerHeight)) || 1080;
      const steps = Math.ceil(pageHeight / browserHeight);

      for (let i = 0; i < steps; i++) {
        await browser.execute(() => this.window.scrollBy(0, this.window.innerHeight));
        cucumberJson.attach(await driver.takeScreenshot(), 'image/png');
      }

      return;
    }

    if (!Context.getIsScenarioApplicable) {
      // If test is not applicable for client, skip and attach message
      cucumberJson.attach(`This step is not applicable for this client - (${Context.getInstance().client})`);
    } else {
      cucumberJson.attach('PASSED');
    }
  },
  onComplete: function (): void {
    process.exit(0); // Do not terminate WebDriver on Assertion failure or any error
  },
};
