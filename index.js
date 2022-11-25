const express=require("express")
const app=express()
const cors=require("cors")
const port=4222;
const bodyParser=require("body-parser")

app.use(bodyParser.urlencoded({
	extended:true
}))
app.use(bodyParser.json())
app.use(cors())
app.get("/",(req,res)=>{
	res.send("Rey evarra meerantha")
})
app.post("/newData",(req,res)=>{
	//console.log(req)
	const {name,password,course,gender}=req.body
	console.log(name,password,course,gender,"values")
	res.send("Data Added")
})
app.listen(port,()=>{
	console.log("Hi,This is Rajesh")
})
