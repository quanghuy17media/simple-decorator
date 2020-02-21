import { Client } from '@elastic/elasticsearch';

export default new Client({
  node: global.gConfig.elasticUri,
  auth: {
    username: global.gConfig.elasticUsername,
    password: global.gConfig.elasticPass,
  },
  headers: { elasticAuthorization: global.gConfig.elasticAuthorization },
});
