import express from "express";
import PaymentController from "../Controller/PaymentController";

const routes =  express.Router( );

routes.post('/payment', PaymentController.CreatePayment);

export default routes;

