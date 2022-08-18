import { PromisifiedElement, Stringified } from '../interfaces/element.interface';

export async function expectText(element: PromisifiedElement, text: string): Promise<void> {
  await expect(await element).toHaveText(text);
}

export async function expectValue(element: PromisifiedElement, text: string): Promise<void> {
  expect(await (await element).getValue()).toEqual(text);
}

export async function expectToExist(element: PromisifiedElement): Promise<void> {
  await expect(await element).toExist();
}

export async function expectDisabled(element: PromisifiedElement): Promise<void> {
  await expect(await element).toBeDisabled();
}

export async function expectEqual(element: number | Stringified | Promise<Stringified>, expectation: Stringified | number): Promise<void> {
  expect(await element).toEqual(expectation);
}

export async function expectToContain(element: string | Promise<string>, value: string): Promise<void> {
  expect(await element).toContain(value);
}

export async function expectAttributeToContain(element: PromisifiedElement, attribute: string, value: string): Promise<void> {
  await expect(await element).toHaveAttributeContaining(attribute, value);
}

export async function expectURL(expectation: string, withSuffix = false): Promise<void> {
  expect((await browser.getUrl()) + (withSuffix ? '/' : '')).toContain(expectation);
}
