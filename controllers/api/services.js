const Services = require('../../models/Services')

//Create services function
async function create(req,res) {
    try{
        const service = await Services.create(req.body)
        res.json(service)
    } catch(err){
        res.status(400).json({msg:err.message})
    }
}

//Get services function
 const getAll = async (req,res) => {
    try{
        const getAllService = await Services.find({})
        res.status(200).json(getAllService)
    } catch(err){
        res.status(400).json({msg:err.message})
    }
}

//Get by Id function
const getById = async (req,res) => {
    try{
        id = req.params.id 
        console.log("This is the id inside getById" + id)
        console.log(id)
        const getByIdService = await Services.findOne({"_id":id})
        res.status(200).json(getByIdService)
    } catch(err){
        res.status(400).json({msg:err.message})
    }
}

// Edit(Put/Update) services function
async function edit(req,res) {
    try{
        const editService = await Services.findByIdAndUpdate(req.body.id,req.body.service)
        res.json(editService)
    } catch(err){
        res.status(400).json({msg:err.message})
    }
}
// // Delete All services function
async function deleteAll(req,res) {
    try{
        await Services.deleteMany({})
        res.json('All data has been deleted')
    } catch(err){
        res.status(400).json({msg:err.message})
    }
}
// // Delete one services function
async function deleteOne(req,res) {
    try{
        const deletedService =  await Services.findByIdAndDelete(req.body.id)
        res.json(deletedService)
    } catch(err){
        res.status(400).json({msg:err.message})
    }
}

module.exports = {
    create,
    getAll,
    edit,
    deleteAll,
    deleteOne,
    getById
};
