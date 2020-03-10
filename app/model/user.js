module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const UserSchema = new Schema({
    phone: {
      type: String
    },
    realName: {
      type: String
    },
    isAuthorized: Boolean,
    isAdmin: Boolean,
    password: String,
    deviceId: String,
    userName: String
  });
  return mongoose.model("User", UserSchema, "user");
};
