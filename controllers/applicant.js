const applicantData = require ('../models/applicant.js'); 

exports.getapplicants= async (req,res) => {
    try {
        const allapplicants= await applicantData.find(); 

        res.status(200).json(allapplicants); //Ok
    } catch (error) {
        res.status(404).json({message: error.message}) //Not Founnd
    }
}

exports.createapplicants= async (req,res) => {
    const applicant= req.body; 

    const newapplicant = new applicantData(applicant); 

    try {
        await newapplicant.save(); 
        res.status(201).json(newapplicant); //Created
    
    } catch (error) {
        res.status(409).json({message: error.message}) //Conflict 
    }

} 
