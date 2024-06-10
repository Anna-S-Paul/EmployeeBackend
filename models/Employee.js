const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "id":Number,
        "Name":String,
        "Designation":String,
        "salary":Number
    }
)
let employeemodel=mongoose.Model("employees",schema)
module.exports={employeemodel}