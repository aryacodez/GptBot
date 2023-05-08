const PDFExtract  = require('pdf.js-extract').PDFExtract;
const pdfExtract = new PDFExtract();
const Upload = require('../models/upload')

exports.file = async (req, res) => {
    try {
        if (!req.files || !req.files.file) {
            return res.status(400).send('No file uploaded');
        }

        const file = req.files.file;
        const uploadedFilesDir = './uploadedFiles'; // specify the destination directory here
        const filePath = `${uploadedFilesDir}/${file.name}`;

        await file.mv(filePath);

        const data = await pdfExtract.extract(filePath, { 
            type: 'text'
        });

        const allText = data.pages[0].content.reduce((acc, page) => {
            return acc+page.str+ "\n";
        }, '');
        const cleanedStr = allText.replace(/[^\w\s\-,&/*()+.<>!=]/g, "").replace(/[\n\s]+/g, ' ');
        
        res.send(cleanedStr)
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}


exports.text = async(req,res)=>{
    try{
        const {text}= req.body

        const data = await Upload.create({
            text
        })
        return res.status(200).json({data})
    }catch(e){
        console.log(e)
    }
}