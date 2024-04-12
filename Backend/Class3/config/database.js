const mongoose = require("mongoose");

require("dotenv").config();

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(console.log("DB Connected Successfully"))
    .catch((error) => {
        console.log("DB facing connection issues")
        console.log(error);
        process.exit(1);
    })
};

module.exports = connectWithDb;