import * as Assert from 'assert';
import { WebIOElement } from '../interfaces/element.interface';

export async function getElement(locator: string): Promise<WebIOElement> {
  const element = await $(locator);

  await element.waitForExist({
    timeout: (browser.config as any).cucumberOpts.timeout,
    timeoutMsg: `Element with selector is not rendered: "${locator}"`,
  });

  return element;
}

export async function getNthElement(locator: string, nth = 0): Promise<WebIOElement> {
  const elements = await browser.waitUntil(
    async () => {
      const elements = await $$(locator);

      if (elements.length <= nth) {
        return false;
      }

      return elements as any;
    },
    {
      timeoutMsg: `Could not find #${nth} element`,
      interval: 50,
    }
  );

  if (!elements[nth]) {
    Assert.fail(`Element "${locator}" #${nth} not found`);
  }

  await elements[nth].waitForExist({
    timeout: (browser.config as any).cucumberOpts.timeout,
    timeoutMsg: `Element with selector is not rendered: "${locator}"`,
  });

  return elements[nth];
}

export async function getElements(locator: string): Promise<WebIOElement[]> {
  const elements = await $$(locator);

  for (const element of elements) {
    await element.waitForExist({
      timeout: (browser.config as any).cucumberOpts.timeout,
      timeoutMsg: `Element with selector is not rendered: "${locator}"`,
    });
  }

  return elements;
}

export async function getElementTexts(locator: string): Promise<string[][]> {
  const result: string[][] = [];
  const collection = await $$(locator);
  const element = await $(locator);

  await element.waitForExist({
    timeout: (browser.config as any).cucumberOpts.timeout,
    timeoutMsg: 'Element (+text) with selector is not rendered: "' + locator + '"',
  });

  for (const element of collection) {
    const newItem: string[] = Array.of(await element.getText());
    result.push(newItem);
  }

  return result;
}

export async function getElementText(selector: string): Promise<string> {
  const element = await $(selector);

  await element.waitForExist({
    timeout: (browser.config as any).cucumberOpts.timeout,
    timeoutMsg: 'Element (+text) with selector is not rendered: "' + selector + '"',
  });

  return element.getText();
}

export async function clickElement(element: WebIOElement | Promise<WebIOElement>, checkIfClickable = true): Promise<void> {
  const loadedElement = await element;

  if (checkIfClickable) {
    await expect(loadedElement).toBeClickable();
  }

  await loadedElement.click();
  await browser.setTimeout({ pageLoad: 10000 });
}

export async function writeToElement(element: WebIOElement | Promise<WebIOElement>, text: string): Promise<void> {
  const loadedElement = await element;

  await loadedElement.click();
  await loadedElement.setValue(text);
}

export async function getFlat(element: Promise<string[][]>): Promise<string[]> {
  return (await element).flat();
}
