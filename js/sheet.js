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
    $.ajax({
        type: 'GET',
        url: 'https://script.google.com/macros/s/AKfycbwXisa0mbk-OCXJY1EusPQO7scn0is5pucdGJVTyzlLxyBTuP8F2QTXsB98kxMvSbs-UA/exec' ,
        data: {
            "name": $('#name').val(),
            "email": $('#email').val(),
            "message": $('#message').val()
        } ,
        success: alert("success") ,
});
});