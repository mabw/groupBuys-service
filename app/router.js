module.exports = app => {
  const { router, controller } = app;
  router.get("/", controller.home.index);

  router.get("/addUser", controller.home.addUser);

  router.get("/updateUser", controller.home.updateUser);

  router.get("/deleteUser", controller.home.deleteUser);
};
