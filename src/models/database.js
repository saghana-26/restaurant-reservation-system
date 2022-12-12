const mongoose = require('mongoose');

const uri = "mongodb+srv://saghana:Sanjana123@cluster0.tqdn9ye.mongodb.net/?retryWrites=true&w=majority"

async function connect() {
    try {
      await mongoose.connect(uri);
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error(error);
    }
  }
  
connect();
  
require('./reserve');
require('./register');