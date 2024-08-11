const mongoose = require('mongoose');
require('dotenv').config();
const dbConnect = () => {
    mongoose.connect(process.env.mongo_url,
        {
            useNewUrlParser : true,
            useUnifiedTopology : true
        }
    )
        .then(() => { console.log("connection succesful") })
        .catch((error) => { 
            console.log("error received");
        process.exit(1);
        });
}
module.exports=dbConnect;