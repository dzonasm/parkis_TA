import { MapperInterface, MapperValue } from '../interfaces/mapper.interface';
import { Context } from './context';

export function getHomePageIDMapper(mapped: MapperInterface, fieldName: string): MapperValue {
  if (!mapped[fieldName]) {
    throw new Error('Missing home page ID mapper or fieldName');
  }

  let target = mapped[fieldName].find((e) => e.clients.includes(Context.getInstance().client));
  if (!target) {
    target = mapped[fieldName].find((e) => e.clients.includes('*'));
  }

  if (!target) {
    throw new Error('Unknown field in home page ID mapper ("' + fieldName + '")');
  }

  return target.value;
}

export function getMapperValues(mapped: MapperInterface, fieldName: string): MapperValue {
  if (!mapped[fieldName]) {
    throw new Error('Missing mapper or fieldName');
  }

  let target = mapped[fieldName].find((e) => e.clients.includes(Context.getInstance().client));
  if (!target) {
    target = mapped[fieldName].find((e) => e.clients.includes('*'));
  }

  if (!target) {
    throw new Error('Unknown field ("' + fieldName + '")');
  }

  return target.value;
}