"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const res = await this.service.user.findUser();
    console.log(res);
    this.ctx.body = res;
  }

  async addUser() {
    await this.service.user.addUser();
    this.ctx.body = "hi, egg, add ";
  }

  async updateUser() {
    await this.service.user.updateUser();
    this.ctx.body = "hi, egg, update";
  }

  async deleteUser() {
    await this.service.user.deleteUser();
    this.ctx.body = "hi, egg, delete";
  }
}

module.exports = HomeController;
