const { Schema, model } = require("mongoose");

const DOCUMENT_NAME = "User";
const COLLECTION_NAME = "Users";

var answerSchema = new Schema(
  {
    user_name: {
      type: String,
      require: true,
      maxLength: 150,
    },
    question: {
      type: Schema.Types.ObjectId,
    },
    answer: {
      type: String,
    },
    phase: {
      type: String,
      require: true
    }
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

module.exports = model(DOCUMENT_NAME, answerSchema);