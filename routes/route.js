const route=require("express").Router()
const {insertemployeedata}=require("../controller/employee")

route.post("/employeedata",insertemployeedata)
module.exports=route