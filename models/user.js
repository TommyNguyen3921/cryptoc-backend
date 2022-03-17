import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {type:String, required: true},
    email: {type:String, required: true},
    password: {type:String, required: true},
    id: {type:String},
    fav: [{
        name: String,
        icon: String,
        price: String,
        symbol: String

    }]

});

var usermodel = mongoose.model('User',userSchema);

export default usermodel;