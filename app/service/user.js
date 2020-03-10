"use strict";

const Service = require("egg").Service;

class UserService extends Service {
  async findUser() {
    const result = await this.ctx.model.User.find();
    console.log("result: ", result);
    return result;
  }

  async addUser() {
    const user = new this.ctx.model.User({
      username: "a123",
      password: "bb333b",
      bugList: ["1", "2", "3"]
    });
    user.save();
  }

  async updateUser() {
    const result = await this.ctx.model.User.updateOne(
      {
        _id: "5e677d3af7b1eaf154e70319"
      },
      {
        password: "cccccccccc"
      }
    );
    return result;
  }

  async deleteUser() {
    const result = await this.ctx.model.User.deleteOne({
      _id: "5e677d3af7b1eaf154e70319"
    });
    return result;
  }
}

module.exports = UserService;
