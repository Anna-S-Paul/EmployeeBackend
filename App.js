const express= require("express")
const mongoose= require ("mongoose")
const cors= require("cors")
const {employeemodel}=require("./models/Employee")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://Annajimmy:annajimmychirackal@cluster0.moqndmi.mongodb.net/employeedb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/",(req,res)=>{
    let input=req.body
    let employee=new employeemodel(input)
    employee.save()
    console.log(employee)
    res.json({"status":"success"})
}
)

app.post("/search",
    (req,res)=>{
        res.send("Welcome to my search page")
    }
)

app.post("/delete",
    (req,res)=>{
        res.send("Welcome to my delete page")
    }
)


app.get("/viewall",
    (req,res)=>{
        employeemodel.find().then(
            (data)=>{
                res.json(data)
            }
        ).catch(
            (error)=>{
                res.json(error)
            }
        )
    }
)

app.listen(8081,()=>{
    console.log("server started")
} 
)