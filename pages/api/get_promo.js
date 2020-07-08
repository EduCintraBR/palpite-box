import { GoogleSpreadsheet } from 'google-spreadsheet'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

const fromBase64 = value => {
    const buffer = Buffer.from(value, 'base64')
    return buffer.toString('ascii')
}

export default async (request, response) => {
    await doc.useServiceAccountAuth({
        client_email: process.env.SHEET_CLIENT_EMAIL,
        private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
    })
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