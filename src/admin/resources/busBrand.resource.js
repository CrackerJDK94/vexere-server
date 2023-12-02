const { BusBrand } = require("../../models");

const busBrandResource = {
  resource: BusBrand,
  options: {
    navigation: {
      name: null,
    //   icon: "busBrand",
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
module.exports = busBrandResource;