const yargs = require('yargs').argv;

export const LaunchHeadlessMode = true; // If `false`, a browser will auto open (useful to monitor visually instead of through terminal)

export const Specifications = [
  './src/features/*.feature',
// example to push spec with data -   './src/features/home/' + yargs.client + '_home.feature',
];

// if (yargs.client === 'indigo') {
//   Specifications.push('./src/features/quizzards/*.feature');
// }

export const StepDefinitions = [
  './src/step-definitions/*.steps.ts',
];

export enum Client {
  Indigo = 'indigo',
}

/**
 * Array:
 * - First element - Page Object file name
 * - Second element (optional) - Page Object folder name
 */
export const ContextPages = {
  Results: ['results'],

  Dental: ['dental'],
  Vision: ['vision'],
  Healthcare: ['healthcare'],

  /* Quizzards */
  Quizzard: ['quizzard'],
  GenericQuiz: ['generic'],

  /* Offerings */
  Offerings: ['offerings'],
  
  Faq: ['faq'],
  howItWorks: ['howItWorks'],
  termsOfUse: ['termsOfUse'],
};
