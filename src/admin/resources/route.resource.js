const { Route } = require("../../models");

const routeResource = {
  resource: Route,
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
    pickupPointList: {
      isArray: true,
      type: "mixed",
    },
    "pickupPointList.pickupPoint": {
      type: "mixed",
    },
    "pickupPointList.price": {
      type: "string",
    },
    sort: {
      sortBy: "createdAt",
      direction: "desc",
    },
  },
};
module.exports = routeResource;
