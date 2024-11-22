const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'CommunityShare_GNIT',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

