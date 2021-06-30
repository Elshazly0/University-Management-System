const mongoose = require  ('mongoose'); 

const scheduleSchema = mongoose.Schema({
    Day: String,
    FirstP: String, 
    SecondP: String,
    ThirdP: String, 
    FourthP: String, 
    FifthP: String,  
    tutorial: {
        type: String, 
        default: 'A'
    },
    
}); 

//const schedule= mongoose.model('schedule', scheduleSchema);
//export default schedule;
module.exports = schedule =mongoose.model('schedule', scheduleSchema);
