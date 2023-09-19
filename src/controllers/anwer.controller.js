class UserController {
    userAnswer = async (req, res, next) => {
        try {
          return res.status(201).json(await UserService.userAnswer(req.body));
        } catch (error) {
          next(error);
        }
      };
}

module.exports = new UserController()