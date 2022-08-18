export type WebIOElement = WebdriverIO.Element;

export interface ResultsExpectedDetails {
  title: string;
  type: string;
  carrier: string;
  firstHighlight: string;
  secondHighlight: string;
}

export type Stringified = string | string[] | string[][];

export type PromisifiedElement = WebIOElement | Promise<WebIOElement>;
