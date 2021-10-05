$(document).ready(() => {

    $("#submitForm").prop("disabled", true);

    const validateInput = () => {
        const isDisabled = $('#inputAppName').val().trim() === '' || $('#inputAppUrl').val().trim() === '';
        $('#submitForm').prop('disabled', isDisabled);
    }

    $('#inputAppName').on('keyup', validateInput);
    $('#inputAppUrl').on('keyup', validateInput);
  
});


const cmdItem = (targetUrl, methodType) => {

    const appName = $("#inputAppName").val();
    const appUrl = $("#inputAppUrl").val();

    $.ajax({
        url: targetUrl,
        type: methodType,
        data: {
            AppNameInput: appName,
            AppUrlInput: appUrl
        },
        success: result => {
            $(location).attr("href", result.nextUrl);
        }
    });
}

const remItem = targetUrl => {

    const confResult = confirm("Are you sure you want to delete this link?")

    if(confResult === true){
        $.ajax({
            url: targetUrl,
            type: "DELETE",
            success: result => {
                $(location).attr("href", result.nextUrl);
            }
        });
    }
    
};