const mongoose=require('mongoose');
const { stringify } = require('uuid');

const reserveSchema = new mongoose.Schema({
      name:{
        type: String,
        required: 'this feild is required.'
      },
      phonenum:{
        type: Number,
        required: 'this feild is required.'
      },
      Rsize:{
        type: Number,
        required: 'this feild is required.'
      },
      Rdate:{
        type: String,
        required: 'this feild is required.'
      },
      Rtime:{
        type: String,
        required: 'this feild is required.'
      },

});

const reserveModel = mongoose.model('reservation',reserveSchema);

module.exports=reserveModel;



