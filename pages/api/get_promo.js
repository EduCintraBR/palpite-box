import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'

const doc = new GoogleSpreadsheet('1pniZtImF1c48Spz33L-yx1zXHyRgFnYva9g4dWm2XgQ')

export default async (request, response) => {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()

    const sheet = doc.sheetsByIndex[2]
    await sheet.loadCells('A1:B3')

    const mostrarPromocaoCell = sheet.getCell(2,0)
    const textoCell = sheet.getCell(2,1)
    
    return response.json({
        showCoupon: mostrarPromocaoCell.value,
        message: textoCell.value
    })
}