import { Frameworks } from '@wdio/types';
import { Client, ContextPages } from '../data/global-data';

const yargs = require('yargs').argv;

function requirePage(fileName: string, folder: string): any {
  const page = require(`../page-objects/${folder}${fileName}.page.ts`);

  return new page.default();
}

export function getStepStatus(result: Frameworks.PickleResult): string {
  if (!result.passed) {
    return 'Failed';
    // eslint-disable-next-line no-use-before-define
  } else if (!Context.getIsScenarioApplicable) {
    return 'Skipped';
  } else {
    return 'Passed';
  }
}

class PrivateContext {
  public environment: string;
  public client: Client;
  public pages: Record<string, string[]>;
  public isScenarioApplicable: boolean;
  public nickname: string | null;

  constructor() {
    this.environment = yargs.env || 'local';
    this.client = yargs.client || Client.Indigo;
    this.pages = ContextPages;
    this.isScenarioApplicable = true;
    this.nickname = null;
  }

  public getPage(pageName: string): any {
    const targetPage = this.pages[pageName];

    if (!targetPage || !targetPage.length) {
      throw new Error('Specified page ("' + pageName + '") is not mapped to PrivateContext.pages list');
    }

    return requirePage(targetPage[0], targetPage[1] || '');
  }
}

export class Context {
  private static instance: PrivateContext;

  constructor() {
    throw new Error('Use Context.getInstance()');
  }

  public static getInstance(): PrivateContext {
    if (!Context.instance) {
      Context.instance = new PrivateContext();
    }

    return Context.instance;
  }

  public static setIsScenarioApplicable(isApplicable: boolean): void {
    Context.getInstance().isScenarioApplicable = isApplicable;
  }

  public static get getIsScenarioApplicable(): boolean {
    return Context.getInstance().isScenarioApplicable;
  }

  public static setNickname(nickname: string): void {
    console.log('Setting user with nickname: ' + nickname);
    Context.getInstance().nickname = nickname;
  }

  public static getNickname(): string {
    return Context.getInstance().nickname || '';
  }
}
