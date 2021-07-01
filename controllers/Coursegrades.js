const coursegradesdata = require ('../models/Coursegrades.js'); 

exports.getCoursegrades= async (req,res) => {
    try {
        const allgrades= await coursegradesdata.find(); 

        res.status(200).json(allgrades); //Ok
    } catch (error) {
        res.status(404).json({message: error.message}) //Not Founnd
    }
}

exports.createCoursegrades= async (req,res) => {
    const coursegrades= req.body; 

    const newcoursegrades = new coursegradesdata(coursegrades); 

    try {
        await newcoursegrades.save(); 
        res.status(201).json(newcoursegrades); //Created
    
    } catch (error) {
        res.status(409).json({message: error.message}) //Conflict 
    }

} 

exports.deleteCoursegrades= async (req,res) => {
    const id= req.params.id; 


    try {
       await coursegradesdata.findByIdAndRemove(id).exec(); 
       res.send('Successfully deleted!')
    
    } catch (error) {
        console.log(error); 
        
    }

}