import Adm from '../Db/db';

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

        if(isAdm==false){
            return res.status(200).json({message: 'isAdm'});
        } else {
            console.log('não existe')
            return res.status(400).json({message: 'dont is Adm'});
        }
        
    }

}

function validateIfInputsIsEmpty (email: string, password: string) {
    if(email!=='' && password!=='') {
        return false;
    } 
    return true;
}

async function validateIfInfoIsTrue(email: string, password: string) {
    try {
        const admInDB = await Adm.find({email: email, password: password});
        if(admInDB.length > 0) {
            return true;
        } 
        return false;
    } catch (error){
        console.error(error)
    }
    
} 


export default {
    validateAdmInfos
}