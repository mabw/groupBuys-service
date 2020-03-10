module.exports = app => {
  const { router, controller } = app;
  router.get("/group-buys/:id", controller.home.index);
  router.get("/group-buys-ongoing", controller.home.index);
  router.get("/group-buys-closed", controller.home.index);
  router.post("/admin/group-buys", controller.home.index);
  router.put("/admin/group-buys", controller.home.index);
  router.del("/admin/group-buys/:id", controller.home.index);

  router.post("/goods", controller.home.index);
  router.put("/goods", controller.home.index);
  router.del("/goods", controller.home.index);

  router.get("/admin/orders", controller.home.index);
  router.get("/orders", controller.home.index);
  router.post("/order", controller.home.index);
  router.put("/admin/order", controller.home.index);

  router.put("/user/verify", controller.home.index);
  router.put("/admin/user/verify", controller.home.index);
  router.get("/users/", controller.home.index);
};
