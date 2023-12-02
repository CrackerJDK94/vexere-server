const httpStatus = require("http-status");
const pick = require("../utils/pick");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { userService, s3Service } = require("../services");
const config = require("../config/config");

const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(httpStatus.CREATED).send(user);
});

const getUsers = catchAsync(async (req, res) => {
  const filter = pick(req.query, ["name", "role"]);
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const result = await userService.queryUsers(filter, options);
  res.send(result);
});

const getUserByWalletAddress = catchAsync(async (req, res) => {
  const user = await userService.getUserByWalletAddress(
    req.params.walletAddress
  );
  if (!user) {
    res.send({ code: 404 });
  }
  res.send({ code: 200, user: user });
});

const getUser = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  res.send(user);
});

const updateUser = catchAsync(async (req, res) => {
  const user = req.user; 
  const userUpdated = await userService.updateUserById(user.id, req.body);
  res.send(userUpdated);
});

const deleteUser = catchAsync(async (req, res) => {
  await userService.deleteUserById(req.params.userId);
  res.status(httpStatus.NO_CONTENT).send();
});

const getSignedUrl = catchAsync(async (req, res) => {
  const user = req.user;
  const { fileName, fileType } = req.query;
  const signedUrl = await s3Service.getSignedURL(
    `${user.id}-${fileName.trim()}`,
    fileType
  );
  res.status(httpStatus.OK).send(signedUrl);
});

const changeAvatar = catchAsync(async (req, res) => {
  const user = req.user;
  const { fileName } = req.body;
  let currentUser = await userService.getUserById(user.id);
  if (!currentUser) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found!");
  }
  const currentAvatar = user.avatar;
  if (currentAvatar) {
    await s3Service.deleteFile(s3Service.getFileNameS3(currentAvatar));
  }

  const userUpdated = await userService.updateUserById(user.id, {
    avatar: s3Service.getS3FilePath(user.id, fileName),
  });
  res.send(userUpdated);
});

module.exports = {
  createUser,
  getUsers,
  getUser,
  getUserByWalletAddress,
  updateUser,
  deleteUser,
  getSignedUrl,
  changeAvatar,
};
