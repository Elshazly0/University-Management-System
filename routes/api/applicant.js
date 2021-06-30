const express = require ('express')
const  { getapplicant, getapplicants, createapplicants} = require ( '../../controllers/applicant.js')
const  { createapplicant} = require ( '../../controllers/applicant.js')

const router = express.Router();



router.get('/', getapplicants);
router.post('/', createapplicants);



//export default router;
module.exports = router;