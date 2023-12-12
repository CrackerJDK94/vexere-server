const allRoles = {
  user: [],
  staff: ['operationStaff', 'saleAgent'],
  admin: ['getUsers', 'manageUsers', 'getBusBrands', 'manageBusBrands', 'getOffices', 'manageOffices', 'getPolicies', 'managePolicies'],
  company:  ['getStaffs', 'managerStaff', 'getOffices', 'manageOffices', 'getPolicies', 'managePolicies'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
