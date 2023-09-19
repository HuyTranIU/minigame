const AnswerService = require("../services/anwer.service");

class AnswerController {
    userAnswer = async (req, res, next) => {
        try {
          return res.status(201).json(await AnswerService.userAnswer(req.body));
        } catch (error) {
          next(error);
        }
      };
}

module.exports = new AnswerController()