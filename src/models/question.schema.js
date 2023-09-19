const { Schema, model } = require("mongoose");

const DOCUMENT_NAME = "Question";
const COLLECTION_NAME = "Questions";

var questionSchema = new Schema(
  {
    questioDescription: {
      type: String,
      require: true
    },
    alternatives: [
        {
            text: {
                type: String,
                required: true
            },
            isCorrect: {
                type: Boolean,
                required: true,
                default: false
            }
        }
    ]
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

module.exports = model(DOCUMENT_NAME, questionSchema);