const qrcode = require('qrcode');
let newQR = async  function (req, res) {
    let body = req.body
    console.log("body------------>",body)

    try{

        let datoAconvertir = ''

        if(body.url == ''){
            datoAconvertir  = body.file
        }else{
            datoAconvertir  = body.url

        }

        // Generar el código QR a partir del dato a convertir
        const qrCode = await qrcode.toDataURL(datoAconvertir);


        res.status(200).json({
            success:true,
            data:qrCode
        })
    }catch (e) {
        console.error(e)
        res.status(500).json({
            success:false,
            error:e
        })
    }
}


module.exports = {
    newQR
}