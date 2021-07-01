const express = require ('express');
const {getCoursegrades,createCoursegrades,deleteCoursegrades} = require ('../../controllers/Coursegrades');

const router = express.Router();



router.get('/', getCoursegrades);
router.post('/', createCoursegrades);
router.delete('/:id', deleteCoursegrades);



//export default router;
module.exports = router;