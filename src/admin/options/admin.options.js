const {
  componentLoader,
  AdminComponents,
} = require("../loader/componentLoader");
const locale = require("./locale.option");

const userResource = require("../resources/user.resource");
// const companyResource = require("../resources/company.resource");
const policyResource = require("../resources/policy.resource");
const routeResource = require("../resources/route.resource");
const officeResource = require("../resources/office.resouce");
const busBrandResource = require("../resources/busBrand.resource");
const vihicleTransportresource = require("../resources/vihicleTransport.resource");

const options = {
  componentLoader,
  rootPath: "/",
  branding: {
    companyName: "Admin Vexere",
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
  locale,
  resources: [
    userResource,
    // companyResource,
    policyResource,
    routeResource,
    officeResource,
    busBrandResource,
    vihicleTransportresource,
  ],
};

module.exports = options;
