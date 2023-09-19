const anwerModel = require("../models/anwer.model")

class AnswerService {
    static userAnswer = async ({user, question, answer }) => {
        try {
            const userExist = await anwerModel.findOne({user_name: user}, {}).lean();
            if(userExist) {
                return {
                    message: "Người này đã trả lời!"
                }
            };
            if(!user) {
                return {
                    message: "Vui lòng nhập tên!!"
                }
            }
            
            const newUser = await anwerModel.create({
                user_name: user,
                answer,
                question
            })

            return newUser
        } catch (error) {
            return {
                message: error
            };
        };
    };



};

module.exports = AnswerService