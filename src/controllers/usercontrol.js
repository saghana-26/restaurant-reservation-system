require('../models/database');
const user=require('../models/reserve');

const register=require('../models/register');



/*async function insertDmmyRegisterData(){
    try{
        await register.insertMany([
            {
                "nam":"prasitha",
                "number":"123",
                "mail": "123@dsjn",
                "pass" : "jcnjdfnc",
                "conpass":"jnfajsnaj"
            },
            {
                "nam":"prasitha",
                "number":"123",
                "mail": "123@dsjn",
                "pass" : "jcnjdfnc",
                "conpass":"jnfajsnaj"
            },
            
        ]);
    }catch(error){
        console.log('err' + error)
    }
}

insertDmmyRegisterData();


/*async function insertDmmyUserData(){
    try{
        await user.insertMany([
            {
                "name":"prasitha",
                "password":"pra123"
            },
            {
                "name":"sanjana",
                "password":"san123"
            },
            {
                "name":"raj",
                "password":"raj123"
            },
            {
                "name":"ram",
                "password":"ram123"
            },
            {
                "name":"sam",
                "password":"sam123"
            }

            
        ]);
    }catch(error){
        console.log('err' + error)
    }
}

insertDmmyUserData();*/