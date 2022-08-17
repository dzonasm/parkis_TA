import { Given } from '@wdio/cucumber-framework';
import DelfiPage from '../pageobjects/delfi.page';

const pages = {
  login: DelfiPage,
};

Given(/^I am on (\w+) page$/, async (page) => {
  await pages[page].open();
});

Given(/^console logs some message$/, async () => {
  console.log('VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV');
});