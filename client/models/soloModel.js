const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);

const Schema = mongoose.Schema;


const soloSchema = new Schema(
    {
        username: String,
        password: String,
        balance: Number
    }
);

const Solos = mongoose.model(' ', soloSchema);

module.exports = Solos;