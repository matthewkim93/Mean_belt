const uniqueValidator = require('mongoose-unique-validator')
const mongoose = require('mongoose');
const { Schema } = mongoose;
const pollSchema = new Schema({
  name:{
    type:String,
    trim:true,
    require:[true,"You must have a name"]
  },
  question:{
    type:String,
    trim:true,
    required:[true,"Your poll must have a question"],
    unique:true,
    minlength:[8,"Your question must be at least 8 characters"]
  },
  option:{
    type:Array,
    required:[true,"Your poll must have options"],
  },
  votes:{
    type:Array
  }
},{timestamps:true})
const Poll = mongoose.model('Poll',pollSchema)
pollSchema.plugin(uniqueValidator, {message:'{PATH} must be unqieu'})
