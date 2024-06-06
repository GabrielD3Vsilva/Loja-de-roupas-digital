import { MercadoPagoConfig, Preference } from "mercadopago";
import dotenv from 'dotenv'

dotenv.config( );

const key: any = process.env.KEY;

async function CreatePayment (req: any, res: any) {
        const {title, value, image, description} = req.body;
    
        console.log({title, value, image, description});
        const client = new MercadoPagoConfig({ accessToken: key});

        const preference = new Preference(client);
    
        const body = {
            items: [
                {
                id: '1',
                title: title,
                quantity: 1,
                currency_id: 'BRL',
                unit_price: value,
                picture_url: image,
                description: description,
                }
            ], 
                back_urls: {
                    success: 'http://localhost:5173/',
                    failure: 'http://localhost:5173/'
              },
            
        };
    
        const pay = await preference.create({body}).then((response)=>{
            return res.status(200).json({init: response.init_point});
        }).catch((error)=>console.log(error));
}


export default {
    CreatePayment
}
