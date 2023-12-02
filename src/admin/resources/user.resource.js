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
      // walletAddress: {
      //   isTitle: true,
      // },
      role: {
        isVisible: false,
      },
      // avatar: {
      //   components: {
      //     list: AdminComponents.Image,
      //     show: AdminComponents.Image,
      //   },
      // },
    },
    // actions: {
    //   delete: {
    //     after: async (response) => {
    //       await deleteDataOfUsers([response.record.params._id.toString()]);
    //       return response;
    //     },
    //   },
    //   bulkDelete: {
    //     after: async (response) => {
    //       await deleteDataOfUsers(response.records.map(r => r.id))
    //       return response;
    //     },
    //   },
    // },
    sort: {
      sortBy: 'createdAt',
      direction: 'desc',
    },
  },
};
module.exports = userResource;
