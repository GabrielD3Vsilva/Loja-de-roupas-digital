import express from "express";

const routes = express.Router( );

routes.post('/', (req, res)=>{
    console.log('ok')
})

export default routes