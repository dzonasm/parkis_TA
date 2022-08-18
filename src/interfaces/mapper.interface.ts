export type MapperValue = string | string[] | string[][] | number;

interface MapperObject {
  clients: string[];
  value: MapperValue;
}

export interface MapperInterface {
  [key: string]: MapperObject[];
}
