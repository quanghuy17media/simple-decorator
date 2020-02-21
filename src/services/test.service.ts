import client from './elasticsearch.connect';

export const checkHealth = async () => {
  const h = await client.cluster.health();
  return h;
};
