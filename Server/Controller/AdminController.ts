import dotenv from 'dotenv';
import db from '../Db/db';

dotenv.config( );

type AdmType = {
    email: string,
    password: string
}

type ProductsInfo = {
    title: string,
    description: string,
    value: number,
    image: string
}

async function validateAdmInfos (req:any, res:any) {
    const {email, password}:AdmType = req.body;

    const isEmpty: boolean = validateIfInputsIsEmpty(email, password);

    if(isEmpty == true) {
        console.log(isEmpty)
        return res.status(400).json({message: "input is empty"});

    } else {
        const isAdm: boolean = await validateIfInfoIsTrue(email, password);
        if(isAdm==true){
            return res.status(200).json({message: 'isAdm'});
        } else {
            console.log('não existe')
            return res.status(400).json({message: 'dont is Adm'});
        }
    }
}

function validateIfInputsIsEmpty (email: string, password: string): boolean {
    if(email!=='' && password!=='' && email!==undefined && password!==undefined) {
        return false;
    } 
    return true;
}

async function validateIfInfoIsTrue(email: string, password: string) {
    const adm = {emailAdm: process.env.EMAIL, passwordAdm: process.env.PASSWORD};
    console.log(adm, email, password)
    if(email == adm.emailAdm && password == adm.passwordAdm) {
        return true;
    }      
    return false;
} 

async function getProductsInfo (req: any, res: any) {
    const {title, description, value, image} = req.body;
    const isEmpty: boolean = validateIfProductValuesIsEmpty({title, description, value, image});
    
    if(isEmpty) {
        return res.status(400).json({message: 'Existem campos vazios'});
    }

    await createAProduct({title, description, value, image});
    return res.status(200).json({message: 'ok'});

    console.log(isEmpty);
}

function validateIfProductValuesIsEmpty ({title, description, value, image}: ProductsInfo): boolean {
    if(title == undefined || description == undefined || value == undefined || image == undefined) {
        return true;
    }
    return false
}

async function createAProduct ({title, description, value, image}: ProductsInfo) {
    await db.Product.create(
        {
            title: title,
            value: value,
            description: description,
            image: image
        }
    ).then(( )=>console.log('create a product'))
    .catch((error)=>(error));
}

async function findAndReturnProducts (req: any, res: any) {
    try {
        const products = await db.Product.find({});
        console.log('find products')
        res.status(200).json(products);
    }catch(error) {
        console.error(error)
    }
}

export default {
    validateAdmInfos,
    getProductsInfo,
    findAndReturnProducts
}