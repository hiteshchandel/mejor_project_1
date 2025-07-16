import multer from "multer";


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null,"./public/temp")
    },
    filename: function (req, file, cb) {
        const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}-${file.originalname}`;
        cb(null, uniqueName);
    }
})

export const upload = multer({
    storage
})