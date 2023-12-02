const { BusType } = require("../../models");

const busTypeResource = {
  resource: BusType,
  options: {
    navigation: {
      name: null,
    //   icon: "busType",
    },
    properties: {
      _id: {
        isVisible: { edit: false, show: true, list: false, filter: false },
      },
    },
    sort: {
      sortBy: 'createdAt',
      direction: 'desc',
    },
  },
};
module.exports = busTypeResource;