const {
  componentLoader,
  AdminComponents,
} = require("../loader/componentLoader");

const userResource = require("../resources/user.resource");
const policyResource = require("../resources/policy.resource");
const routeResource = require("../resources/route.resource");
const officeResource = require("../resources/office.resouce");
const busBrandResource = require("../resources/busBrand.resource");
const busTypeResource = require("../resources/busType.resource");

const options = {
  componentLoader,
  // version: { admin: true, app: "1.0.0" },
  rootPath: "/",
  branding: {
    companyName: "Eggs Gold",
    theme: {
      colors: { primary100: "#4D70EB" },
    },
  },
  assets: {
    styles: ["/custom.css"],
  },
  dashboard: {
    component: AdminComponents.Dashboard,
  },
  resources: [
    userResource,
    policyResource,
    routeResource,
    officeResource,
    busBrandResource,
    busTypeResource,
  ],
};

module.exports = options;
