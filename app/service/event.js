"use strict";

const Service = require("egg").Service;

class EventService extends Service {
  async findEvent() {
    const result = await this.ctx.model.Order.aggregate([
      {
        $lookup: {
          from: "order_item",
          localField: "order_id",
          foreignField: "order_id",
          as: "items"
        }
      }
    ]);
    return result;
  }
}

module.exports = EventService;
