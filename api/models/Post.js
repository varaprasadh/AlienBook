const mongoose =require('mongoose');
const {ObjectId} =mongoose.Schema.Types;

const Like =require("./Like");
const Comment=require("./Comment");

const Post=new mongoose.Schema({
    id: {
         required: true,
         type: String
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    createdAt:{
      type:Date,
      required:true,
      default:Date.now
    },
    shared:{
        type:Array(String),//author id's
    },
    
    // tags:{
    //     type:Array(String),
    //     default:[]
    // },
    // people:{
    //     type:Array(String),
    //     default:[]
    // },
    lastModifiedAt:{
        type:Date,
        required:true,
        default:Date.now
    },
    likes:{
        type:Array(Like.Schema),
        default:[]
    },
    comments:{
        type:Array(Comment.Schema),
        default:[]
    }
});
module.exports = mongoose.model('Post', Post);