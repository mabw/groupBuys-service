"use strict";

const Controller = require("egg").Controller;

class EventController extends Controller {
  async index() {
    const res = await this.ctx.service.order.findEvent();
    this.ctx.body = res;
  }
}

module.exports = EventController;
