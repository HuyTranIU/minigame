const QuestionService = require("../services/question.service");

class QuestionController {
    getQuestion = async (req, res, next) => {
        try {
          return res.status(201).json(await QuestionService.getQuestion());
        } catch (error) {
          next(error);
        }
      };
    createQuestion = async(req, res, next) => {
        try {
            return res.status(201).json(await QuestionService.createQuestion(req.body));
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new QuestionController()