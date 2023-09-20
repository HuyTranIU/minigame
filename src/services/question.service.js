const questionModel = require("../models/question.model");
const { getRandomIndex } = require("../utils");

class QuestionService {
  static lastQuestionFetchTime = 0;
  static questionCache = null;

  static getQuestion = async () => {
    const currentTime = Date.now();
    if (
      currentTime - QuestionService.lastQuestionFetchTime >= 10 * 60 * 1000 ||
      !QuestionService.questionCache
    ) {
      const questionAll = await questionModel.find().lean();
      const index = getRandomIndex(questionAll.length);
      QuestionService.questionCache = questionAll[index];
      QuestionService.lastQuestionFetchTime = currentTime;
    }

    return QuestionService.questionCache;
  };

  static createQuestion = async ({ questionDescription, optionText }) => {
    const questionExist = await questionModel
      .findOne({ question_description: questionDescription })
      .lean();
    if (!questionExist) {
      const newQuestion = await questionModel.create({
        question_description: questionDescription,
        option_text: optionText,
      });
      return {
        message: "Thêm mới thành công!",
        data: newQuestion,
      };
    }
    return {
      message: "Câu hỏi đã tồn tại",
    };
  };
}

module.exports = QuestionService;
