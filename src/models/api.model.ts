interface Header {
  key: string;
  value: string;
}

export default interface ApiParams {
  path?: string;
  queryParams?: { [name: string]: string };
  headers?: { [name: string]: string } | [string, string][];
  body?: any;
}
