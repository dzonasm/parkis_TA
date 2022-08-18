import urls from '../data/urls';
import { Context } from '../helpers/context';

export class Page {
  protected async open(path): Promise<string> {
    return browser.url(`${getEnvUrl() + getClientPath()}${path}`);
  }
}

export function getEnvUrl(): string {
  return urls.base[Context.getInstance().environment];
}

export function getEnvBackendUrl(): string {
  return urls.backend[Context.getInstance().environment];
}

export function getClientPath(): string {
  return urls.clients[Context.getInstance().client];
}