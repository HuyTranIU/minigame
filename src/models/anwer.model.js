const { Schema, model } = require("mongoose");

const DOCUMENT_NAME = "User";
const COLLECTION_NAME = "Users";

var answerSchema = new Schema(
  {
    user_name: {
      type: String,
      maxLength: 150,
      require: true,
    },
    question: {
      type: Schema.Types.ObjectId,
    },
    answer: {
      type: Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

module.exports = model(DOCUMENT_NAME, answerSchema);