const mongoose = require('mongoose');
const conn = async () => {
    try{
        const db = "develop";
        await  mongoose.connect(`mongodb+srv://develop:develop@cluster0.q0i9x.mongodb.net/
        ${db}?retryWrites=true&w=majority`, { useUnifiedTopology: false });
        console.log('DBonline');
    } catch(err){
        console.log(err);
    }
}
module.exports = {
    conn
}