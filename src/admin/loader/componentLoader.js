const { ComponentLoader } = require("adminjs");

const componentLoader = new ComponentLoader();

const AdminComponents = {
  Dashboard: componentLoader.add("Dashboard", "../pages/Dashboard"),
  Image: componentLoader.add("Image", "../pages/Image"),
  TextField: componentLoader.add("TextField", "../pages/TextField"),
  Null: componentLoader.add("Null", "../pages/Null"),
  // other custom components
};
module.exports = {AdminComponents, componentLoader};
