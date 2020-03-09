"use strict";

const Controller = require("egg").Controller;

class OrderController extends Controller {
  async index() {
    const res = await this.ctx.service.order.findOrder();
    this.ctx.body = res;
  }
}

module.exports = OrderController;
