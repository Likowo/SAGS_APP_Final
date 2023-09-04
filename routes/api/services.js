const express = require('express');
const router = express.Router();
const servicesCtrl = require('../../controllers/api/services')

//POST --->Create /api/services
// router.post('/', (req,res) => {
//     res.send('Services Route')
// })  /// This logic used to test with thunder client if data renders on page

router.post('/create', servicesCtrl.create)

//GET ---> Read /api/services/getallservices
router.get('/getallservices',servicesCtrl.getAll)
// router.get('/getallservices',(req,res)=>{
//  res.json('This is working')
// })


// Edit ---> Update /api/services
router.put('/editservice',servicesCtrl.edit)

// DeleteAll services ---> DeleteAll /api/services
router.delete('/deleteall', servicesCtrl.deleteAll)

// DeleteOne service ---> Deleteone /api/services
router.delete('/deleteone', servicesCtrl.deleteOne)





module.exports = router;