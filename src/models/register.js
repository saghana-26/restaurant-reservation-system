const mongoose=require('mongoose');

const registerSchema = new mongoose.Schema({
    nam:{
      type: String,
      required: 'this feild is required.'
    },
    number:{
      type: Number,
      required: 'this feild is required.'
    },
    mail:{
      type: String,
       
    },
    pass:{
      type: String,
      required: 'this feild is required.'
    },
    conpass:{
      type: String,
      required: 'this feild is required.'
    },
  });
  
  const registerModel = mongoose.model('register',registerSchema);
  
  module.exports=registerModel;