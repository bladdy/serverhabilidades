const {Schema, model } = require('mongoose');

const UserSchema = Schema({
    createdDate:{
        type: Date,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        default:'USER'
    }

});
UserSchema.method('toJSON', function(){
    const {__v,...object} = this.toObject();
    return object;

});
module.exports = model('User', UserSchema);



