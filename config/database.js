const mongoose = require('mongoose');
require('dotenv').config();


exports.connectDB = () => {
    mongoose.connect("mongodb+srv://ruetDBadmin:ruetDBadmin@ruet-lms.ebh95qj.mongodb.net/?retryWrites=true&w=majority&appName=ruet-lms", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log('Database connected succcessfully');
        })
        .catch(error => {
            console.log(`Error while connecting server with Database`);
            console.log(error);
            process.exit(1);
        })
};
// ALONE FUNCTION RUNNER
// exports.connectDB();

