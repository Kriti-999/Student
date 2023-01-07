const express=require("express");
const app=express();
const mysql=require("mysql");
const cors=require("cors");
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "hisql",//database password of mysql 
    database: "student",//database name
  });
  app.post("/registerstudent",(req,res)=>{
    console.log(req.body.email);
    const student=req.body.student;
    const rollNumber=req.body.rollNumber;
    const checkIn=req.body.checkIn;
    const checkOut=req.body.checkOut;
    db.query("insert into Student_Detail(student,rollNumber,checkIn,checkOut) values (?,?,?,?)",[student,rollNumber,checkIn,checkOut],
    (err,result)=>{
      if(err){
        console.log(err);
        res.send("User Already Exist ")
      }
      else{
       res.send("Register");
      }
    });
  })

  app.get("/allstudent",(req,res)=>{
    
    db.query("select * from Student_Detail;",
    (err,result)=>{
      if(err){
        console.log(err);
      }
      else{
        
        res.send(result);
      }
    })
  })
  app.post("/deletestudent",(req,res)=>{
    const id=req.body.id;

    console.log(req.body);
    db.query("delete from Student_Detail where id=?",[id],
    (err,result)=>{
      if(err){
        console.log(err);
      }
    })

  })
  app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
  });