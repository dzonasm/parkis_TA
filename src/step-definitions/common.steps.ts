import { Given } from '@cucumber/cucumber';
import { Context } from '../helpers/context';

Given(/^the user is on the (\w+) page$/, { timeout: 60 * 1000 }, async (pageName) => {
  await Context.getInstance().getPage(pageName).open();
  await Context.setIsScenarioApplicable(true);
});

