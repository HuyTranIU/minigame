const findQuestionByDescription = async(description) => {
    return await questionModel.findOne({question_description: description}).lean();
}
module.exports = {
    findQuestionByDescription
}