const {insertdb}=require("../config/db")
const insertemployeedata=async (req,res)=>{
    console.log(req.body);
    const details=req.body
    const result=await insertdb(details)
    console.log(result);
}
module.exports={insertemployeedata}