const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "empid":Number,
        "empname":String,
        "designation":String,
        "salary":Number
    }
)
let employeemodel=mongoose.model("employees",schema)
module.exports={employeemodel}