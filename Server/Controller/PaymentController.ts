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
                },
            ]
        };
    
        await preference.create({body}).then((response)=>console.log(response)).catch((error)=>console.log(error));
}


export default {
    CreatePayment
}
