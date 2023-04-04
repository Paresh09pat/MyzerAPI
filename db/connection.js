const mongoose =require("mongoose")
const URL ='mongodb+srv://09patilparesh:paresh241197@cluster0.9s0ltvl.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(URL, {
     useNewUrlParser: true, 
     useUnifiedTopology: true
     }).then(()=>{
        console.log("Connecton is succssfull with database")
     }).catch((err)=>{
        console.log("error in database ==>",err)
     })
     