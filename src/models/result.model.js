const { Schema, model } = require("mongoose");

const DOCUMENT_NAME = "Result";
const COLLECTION_NAME = "Results";

const questionSchema = new Schema(
  {
    user_winner: Schema.Types.ObjectId
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

module.exports = model(DOCUMENT_NAME, questionSchema);