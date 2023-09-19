const anwerModel = require("../models/anwer.model")

class AnswerService {
    static userAnswer = async ({name, question, answer }) => {
        try {
            const nameExist = await anwerModel.findOne({user_name: name}).lean();
            if(nameExist) {
                return {
                    message: "Người này đã trả lời câu hỏi!"
                }
            };
        } catch (error) {
            return {
                message: error
            };
        };
    };
};

module.exports = AnswerService