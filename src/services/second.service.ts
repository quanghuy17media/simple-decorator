import client from './elasticsearch.connect';

export const search = async () => {
  const s = await client.indices.getMapping();
  return s;
};
