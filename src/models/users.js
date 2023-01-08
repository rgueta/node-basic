import {Schema, model} from 'mongoose';



const userSchema = new Schema({
    name : {type : String, required: true},
    email : {type : String, unique : true,required: true, lowercase:true, trim:true},
    username : {type : String, required: true},
    pwd : {type : String, required: true, trim: true},
    core : {type : Schema.Types.ObjectId, required: true},
    house : {type : Number, required: true},
    uuid : {type : String, required: true},
    sim : {type : String, required: true},
    gender : {type : String, required: true},
    avatar : {type : String},
    roles : [{
        ref: 'Roles',
        type: Schema.Types.ObjectId
    }],
    locked : {type : Boolean},
    location : {type: String},
},
{
    timestamps:true,
    versionKey:false
});


export default model('Users', userSchema);