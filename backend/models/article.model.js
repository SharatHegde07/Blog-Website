const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const articleSchema=new Schema({
    
    title:{type:String, required:true,unique:true},

    author:{type:String, required:true},

    content:{type:String, max:200, required: true},

    
    date:{type:Date,required:true}

}, 
    {timestamps:true,
});


const Article= mongoose.model('Article',articleSchema);

module.exports = Article;