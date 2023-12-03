const { User } = require("../../models");
const { deleteDataOfUsers } = require("../../services/user.service");
const { AdminComponents } = require("../loader/componentLoader");

const userResource = {
  resource: User,
  options: {
    navigation: {
      name: null,
      icon: "User",
    },
    properties: {
      _id: {
        isVisible: { edit: false, show: true, list: false, filter: false },
      },
      password: {
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
module.exports = userResource;
