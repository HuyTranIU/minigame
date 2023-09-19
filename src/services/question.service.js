const questionModel = require("../models/question.model");
const { getRandomIndex } = require("../utils");

class QuestionService {
    static getQuestion = async () => {
        const questionAll = await questionModel.find().lean();
        const index = getRandomIndex(questionAll.length)
        return questionAll[index];
    }

    static createQuestion = async ({questionDescription, optionText}) => {
        const questionExist = await questionModel.findOne({question_description: questionDescription}).lean();
        if(!questionExist) {
            const newQuestion = await questionModel.create({question_description: questionDescription, option_text: optionText});
            return {
                message: "Thêm mới thành công!",
                data: newQuestion
            };
        };
        return {
            message: "Câu hỏi đã tồn tại"
        };
    }
}

module.exports = QuestionService