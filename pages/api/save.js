import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'

moment().locale('pt-br')


const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

const geraCupom = () => {
    const cupom = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase()
    return cupom.substr(0, 4) + '-' + cupom.substr(4, 4) + '-' + cupom.substr(8, 4)
}

export default async (request, response) => {
    let Cupom = ''
    let Promo = ''

    try {
        const data = JSON.parse(request.body)
        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: process.env.SHEET_PRIVATE_KEY
        })
        await doc.loadInfo()
    
        const sheetConfig = doc.sheetsByIndex[2]
        await sheetConfig.loadCells('A1:B3')
        const promocaoAtiva = sheetConfig.getCell(2,0)
        const textoPromo = sheetConfig.getCell(2,1)
        
        if (promocaoAtiva.value == true) {
            Cupom = geraCupom()
            Promo = textoPromo.value
        }

        const sheet = doc.sheetsByIndex[1]
    
        // Nome	Email	Whatsapp	Cupom	Promoção
        await sheet.addRow({
            Nome: data.Nome,
            Email: data.Email,
            Whatsapp: data.Whatsapp,
            Cupom: Cupom,
            Promocao: Promo,
            'Data Preenchimento': moment().format('DD/MM/YYYY HH:mm:S'),
            'Nota': data.Nota,
            Indica: data.Indica === 'true' ? 'Sim' : 'Não',
            Critica: data.Critica
        })
        response.send(JSON.stringify({
            showCoupon: Cupom !== '',
            Cupom,
            Promo
        }))   
    } catch (error) {
        response.send({ message: 'Erro => ' + error.message})
        console.log(error)
    }
}