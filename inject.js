(function(){
    var interval;

  $(document).ready(function() {

        //$('body').on('keypress','.editable',cuentaTexto);
        //presiona boton de redactar
        $('body').on('click','.T-I',function(){
            interval = setTimeout (setButtonEncrypt, 10);
            
        });

        $('body').on('click','#btnEncriptar',function(){
            var PassPhrase = "The Moon";
            var Bits = 512;
            var RSAkey = cryptico.generateRSAKey(PassPhrase, Bits);
            var PublicKeyString = cryptico.publicKeyString(RSAkey);

            //texto en msj a enviar
            var plainText = $( "div" ).find('.LW-avf').text();
    
            var EncryptionResult = cryptico.encrypt(plainText , PublicKeyString);
        
            $( "div" ).find('.LW-avf' ).html( EncryptionResult.cipher );

        });

        $('body').on('click','#btnDesencriptar',function(){
            //hardcode
            var PassPhrase = "The Moon";
            var Bits = 512;
            var RSAkey = cryptico.generateRSAKey(PassPhrase, Bits);
            //
            var plainText =  $( "div" ).find('.a3s').text();
            
            var DecryptionResult = cryptico.decrypt(plainText, RSAkey);
        
            $( "div" ).find('.a3s' ).html( DecryptionResult.plaintext );


        });

        // dar click en algun correo
        $('body').on('click','.yO',function(){
            //alert( "Correo for click. ");
            interval = setTimeout (setButtonDecrypt, 10);
        });

    });

    function setButtonEncrypt()
    {
        var html = '<div class="encriptar"> <button id="btnEncriptar" type="button">NcriptR!</button> </div>';
            $('.aWQ').append(html);
    }
    function setButtonDecrypt()
    {
        var html1 = '<div class="desencriptar"> <button id="btnDesencriptar" type="button">dsNcriptR!</button> </div>';
            $('.ade').append(html1);
    }


}());
 