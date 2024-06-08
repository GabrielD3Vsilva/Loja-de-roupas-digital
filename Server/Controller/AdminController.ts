import dotenv from 'dotenv';

dotenv.config( );

type AdmType = {
    email: string,
    password: string
}


async function validateAdmInfos (req:any, res:any) {
    const {email, password}:AdmType = req.body;

    const isEmpty: boolean = validateIfInputsIsEmpty(email, password);

    if(isEmpty == true) {
        console.log(isEmpty)
        return res.status(400).json({message: "input is empty"});

    } else {
        const isAdm = await validateIfInfoIsTrue(email, password);

        if(isAdm==true){
            return res.status(200).json({message: 'isAdm'});
        } else {
            console.log('não existe')
            return res.status(400).json({message: 'dont is Adm'});
        }
        
    }

}

function validateIfInputsIsEmpty (email: string, password: string) {
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


export default {
    validateAdmInfos
}