const mongoose=require('mongoose');
const cardSchema=new mongoose.Schema({
    Title:String,
    ChannelName:String,
    Views:String,
    Time:String
});
module.exports=mongoose.model('card',cardSchema);