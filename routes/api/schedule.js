const express = require ('express')
const  { getschedule} = require ( '../../controllers/schedule.js')
const  { createschedule} = require ( '../../controllers/schedule.js')
const  { deleteschedule} = require ( '../../controllers/schedule.js')

const router = express.Router();



router.get('/', getschedule);
router.post('/', createschedule);
router.delete('/:id', deleteschedule);



//export default router;
module.exports = router;