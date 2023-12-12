const { User } = require("../../models");
const { AdminComponents } = require("../loader/componentLoader");

const Company = User;

const companyResource = {
  resource: Company,
  options: {
    navigation: {
      name: null,
    },
    properties: {
      _id: {
        isVisible: { edit: false, show: true, list: false, filter: false },
      },
      password: {
        isVisible: { edit: true, show: false, list: false, filter: false },
      },
      account: {
        isVisible: { edit: false, show: false, list: false, filter: false },
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
module.exports = companyResource;
