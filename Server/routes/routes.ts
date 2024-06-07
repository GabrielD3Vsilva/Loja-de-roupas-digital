import express from "express";
import PaymentController from "../Controller/PaymentController";
import AdminController from "../Controller/AdminController";

const routes =  express.Router( );

routes.post('/payment', PaymentController.CreatePayment);
routes.post('/adm', AdminController.validateAdmInfos);

export default routes;

