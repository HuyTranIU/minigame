const { Schema, model } = require("mongoose");

const DOCUMENT_NAME = "User";
const COLLECTION_NAME = "Users";

var userSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      maxLength: 150,
    },
    question: {
      type: Schema.ObjectId,
    },
    answer: {
      type: String,
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

module.exports = model(DOCUMENT_NAME, userSchema);