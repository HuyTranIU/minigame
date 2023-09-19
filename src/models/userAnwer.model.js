const { Schema, model } = require("mongoose");

const DOCUMENT_NAME = "User";
const COLLECTION_NAME = "Users";

var userAnswerSchema = new Schema(
  {
    user_name: {
      type: String,
      maxLength: 150,
      require: true,
    },
    question: {
      type: Schema.Types.ObjectId,
      require: true,
    },
    slected_answer: {
      type: Schema.Types.ObjectId,
      require: true,
    },
    answer_timer: {
      type: Number,
      require: true,
      default: Date.now,
    },
    prediction: {
      type: Number,
      require: true,
      default: 0,
    }
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

module.exports = model(DOCUMENT_NAME, userAnswerSchema);