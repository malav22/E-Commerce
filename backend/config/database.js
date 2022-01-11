const mongoose = require('mongoose');

const connectDatabase = () =>{
    mongoose.connect(process.env.DB_URI,{
        useNewUrlParser : true,
        useUnifiedTopology : true,
        // useCreateIndex : true,
    })
    .then((data)=>{
        console.log(`Mongodb connection established with server ${data.connection.host}`);
    }).catch((err)=>{
        console.log(`Mongodb connection error: ${err}`);
    });
};

module.exports = connectDatabase;

