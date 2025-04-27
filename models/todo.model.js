import mongoose from "mongoose"


const todoSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true,"Title is required"],
        maxlength:[30,"Title connot exced 30 characters"],
    },
    desctiption:{
        type:String,
        required:[true,"Description is required"],
        maxlength:[30,"Description connot exced 30 characters"],

    }
})
const todo = mongoose.model("Todo",todoSchema)


export default todo;