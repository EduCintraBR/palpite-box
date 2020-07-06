import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'
import moment from 'moment'

moment().locale('pt-br')


const doc = new GoogleSpreadsheet('1pniZtImF1c48Spz33L-yx1zXHyRgFnYva9g4dWm2XgQ')

const geraCupom = () => {
    const cupom = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase()
    return cupom.substr(0, 4) + '-' + cupom.substr(4, 4) + '-' + cupom.substr(8, 4)
}

export default async (request, response) => {
    let CupomGerado = ''
    let Promo = ''

    try {
        const data = JSON.parse(request.body)
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()
    
        const sheetConfig = doc.sheetsByIndex[2]
        await sheetConfig.loadCells('A1:B3')
        const promocaoAtiva = sheetConfig.getCell(2,0)
        const textoPromo = sheetConfig.getCell(2,1)
        
        if (promocaoAtiva.value == true) {
            CupomGerado = geraCupom()
            Promo = textoPromo.value
        }

        response.re

        const sheet = doc.sheetsByIndex[1]
    
        // Nome	Email	Whatsapp	Cupom	Promoção
        await sheet.addRow({
            Nome: data.Nome,
            Email: data.Email,
            Whatsapp: data.Whatsapp,
            Cupom: CupomGerado,
            Promocao: Promo,
            'Data Preenchimento': moment().format('DD/MM/YYYY HH:mm:S'),
            'Nota': data.Nota,
            Indica: data.Indica === 'true' ? 'Sim' : 'Não',
            Critica: data.Critica
        })   
    } catch (error) {
        console.log(error)
    }

}