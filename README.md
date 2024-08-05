multer is used to upload single or multiple files likes images,videos on server by user.
multer is npm package which provided different functionalites.


steps--------------->>>>
1. npm i multer
   instal npm in your app by using terminal command " npm i multer"

 2. add this command in your form
        enctype="multipart/form-data"  

   
3. require multer
   require multer in another fil directory if u want to use a middle ware
   const multer = require("multer")


   /////////////////////////////////////////////////////////////////////////////////>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
4.write function for middleware
   const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')  //// create folder where images are going to save
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)  
  }
})

const upload = multer({ storage: storage })

5. export this module and require in entry point of app
    module.exports = upload;

   const upload = require("module path")

6. add upload as a middlwware in your app;
     app.post("/upload",upload.single("filename"),(req,res)=>{
   console.log(req.file) // to print file ;
   })

      
