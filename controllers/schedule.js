const scheduleData = require ('../models/schedule.js'); 

exports.getschedule= async (req,res) => {
    try {
        const allschedule= await scheduleData.find(); 

        res.status(200).json(allschedule); //Ok
    } catch (error) {
        res.status(404).json({message: error.message}) //Not Founnd
    }
}

exports.createschedule= async (req,res) => {
    const schedule= req.body; 

    const newschedule = new scheduleData(schedule); 

    try {
        await newschedule.save(); 
        res.status(201).json(newschedule); //Created
    
    } catch (error) {
        res.status(409).json({message: error.message}) //Conflict 
    }

} 

exports.deleteschedule= async (req,res) => {
    const id= req.params.id; 


    try {
       await scheduleData.findByIdAndRemove(id).exec(); 
       res.send('Successfully deleted!')
    
    } catch (error) {
        console.log(error); 
        
    }

}