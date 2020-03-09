/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1563955654798_9491";

  // add your middleware config here
  config.middleware = [];

  config.bcrypt = {
    saltRounds: 10 // default 10
  };

  config.jwt = {
    secret: "qdcad12345",
    match: "/users"
  };

  config.security = {
    csrf: {
      enable: false
    }
  };
  config.cors = {
    origin: "*",
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH"
  };

  config.client = {
    url: "mongodb://192.168.3.107/group-buys-dev",
    options: {}
  };

  return {
    ...config
  };
};
