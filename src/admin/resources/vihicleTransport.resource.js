const { VihicleTransport } = require("../../models");

const vihicleTransportResource = {
  resource: VihicleTransport,
  options: {
    navigation: {
      name: null,
    },
    properties: {
      _id: {
        isVisible: { edit: false, show: true, list: false, filter: false },
      },
      updatedAt: {
        isVisible: { edit: false, show: true, list: false, filter: false },
      },
      createdAt: {
        isVisible: { edit: false, show: true, list: false, filter: false },
      },
    },
    sort: {
      sortBy: 'createdAt',
      direction: 'desc',
    },
  },
};
module.exports = vihicleTransportResource;