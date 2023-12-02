const { Policy } = require("../../models");

const policyResource = {
  resource: Policy,
  options: {
    navigation: {
      name: null,
    //   icon: "policy",
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
module.exports = policyResource;
