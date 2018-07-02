const uploadController = {};
const multer = require('multer');
const path = require('path');

//Storage Multer
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, '../../uploads')
    },
    filename: function(req, file , cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({
    storage: storage
}).single('image');

uploadController.uploadImage = (req, res) => {
    upload(req, res, (err) =>{
        if(err){
            res.json({
                'mensaje': 'Hubo algun error'
            })
        }else{
            console.log(req.file);
            return res.json({
                originalname: req.file.originalname,
                uploadname: req.file.filename
            })
        }
    })
}

module.exports = uploadController;