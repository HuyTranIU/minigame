const { CronService } = require("../services/question.service");
const UserAnswerService = require("../services/userAnwer.service");

class AnswerController {
    userAnswer = async (req, res, next) => {
        try {
          return res.status(201).json(await UserAnswerService.userAnswer(req.body));
        } catch (error) {
          next(error);
        }
      };
}

module.exports = new AnswerController()