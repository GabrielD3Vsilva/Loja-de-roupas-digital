import express from "express";
import PaymentController from "../Controller/PaymentController";
import AdminController from "../Controller/AdminController";

const routes =  express.Router( );

routes.post('/payment', PaymentController.CreatePayment);
routes.post('/adm', AdminController.validateAdmInfos);
routes.post('/getProductsInfo', AdminController.getProductsInfo);
routes.get('/findAndReturnProducts', AdminController.findAndReturnProducts);

export default routes;

