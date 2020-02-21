import { RequestParams } from '@elastic/elasticsearch';
import client from './elasticsearch.connect';

export const checkHealth = async () => {
  const h = await client.cluster.health();
  return h;
};

export const indexData = async (params: RequestParams.Index) => {
  const d = await client.index(params);
  return d;
};

export const search = async (params: RequestParams.Search) => {
  const d = await client.search(params);
  return d;
};
