import {MercadoPagoConfig, Preference} from 'mercadopago';

const key: any = process.env.KEY

async function CreatePreference ( ) {
    const client: MercadoPagoConfig = new MercadoPagoConfig({ accessToken: key });
    
    const preference = new Preference(client);
    
    const body = {
        items: [
            {
            id: '1234',
            title: 'Camisa',
            quantity: 1,
            currency_id: 'BRL',
            unit_price: 90,
            },
        ]
    };
}


export default {
    CreatePreference,

}