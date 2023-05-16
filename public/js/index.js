$(function () {

    $('#pills-home-tab').click(function () {

        $('#archivoInput').val('')
    })
    $('#pills-profile-tab').click(function () {
        
        $('#urlInput').val('')
    })

    $('#btnCreate').click(function () {

        let body = {}
        body.url  = $('#urlInput').val()
        body.file  = $('#archivoInput').val()


        HoldOn.open(HoldOptions)
        api_conection('POST','api/qr/newQR',body,function (data){
            HoldOn.close()

            let dataQR = data.data

            $('#QRgenerate').css('display','block')

            // Establecer la URL base64 como la fuente de la imagen
            $('#qrImage').attr('src', dataQR);

            // Establecer la URL base64 como el href del enlace de descarga y establecer el nombre del archivo
            $('#downloadLink').attr('href', dataQR).attr('download', 'qr-code.png');

            // Simular el clic del usuario en el enlace de descarga
            $('#downloadLink')[0].click();

        })
    })
})