const mongoose = require ('mongoose')

const UserSchema = new mongoose.Schema({
task: String,
  priority: String,
  dueDate: String,
  dateCreated: String,
  completedDate: String
})

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel