module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const OrdersSchema = new Schema(
    {
      userID: ObjectId,
      userName: String,
      quantity: Number,
      createdAt: Date,
      updatedAt: Date,
      isPaid: Boolean,
      isDeleted: Boolean
    },
    { timestamps: true }
  );

  const GoodsSchema = new Schema(
    {
      title: String,
      price: String,
      unit: String,
      original: String,
      instruction: String,
      createdAt: Date,
      updatedAt: Date,
      isDeleted: Boolean,
      children: [OrdersSchema]
    },
    { timestamps: true }
  );

  const EventSchema = new Schema(
    {
      title: String,
      startTime: Date,
      endTime: Date,
      instruction: String,
      picture: String,
      createdAt: Date,
      updatedAt: Date,
      isDeleted: Boolean,
      children: [GoodsSchema]
    },
    { timestamps: true }
  );
  return mongoose.model("Event", EventSchema, "event");
};
