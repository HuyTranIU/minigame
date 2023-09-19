const { Schema, model } = require("mongoose");

const DOCUMENT_NAME = "Question";
const COLLECTION_NAME = "Questions";

const questionSchema = new Schema(
  {
    question_description: {
      type: String,
      require: true
    },
    option_text: [
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