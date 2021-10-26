//const cors = 'https://cors-anywhere.herokuapp.com/';
//var appUrl = "https://script.google.com/macros/s/AKfycbxuMe5lhl08sPMU5P_SziBsdPDgx9LgaC5l1zzV45iVORoPXIU/exec";
var parameter = {};
$('#send').click(function()
{
    /*parameter={
        name: $('#name').val(),
        email: $('#email').val(),
        message: $('#message').val()
    };*/
    console.log($('#name').val());

    if($('#number').val() == "" || $('#name').val() == "" )
    {
        alert("姓名及今天要種多少樹為必填選項");
    }
    else{
        $.ajax({
            type: 'GET',
            url: 'https://script.google.com/macros/s/AKfycbwtNznktobvXCv_WYVaFt5pMQCPymeJd_t4GXn61M1yloE2tUeCLCRb1EALSqPm_tzUTA/exec' ,
            data: {
                "number": $('#number').val(),
                "name": $('#name').val(),
                "message": $('#message').val()
            } ,
            success: alert("success") ,
        });
    }

});