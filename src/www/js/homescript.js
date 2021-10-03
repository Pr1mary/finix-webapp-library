const deleteItem = deleteUrl => {

    const confResult = confirm("Are you sure you want to delete this link?")

    if(confResult === true){
        $.ajax({
            url: deleteUrl,
            type: "DELETE",
            success: result => {
                alert(result);
                location.reload();
            }
        });
    }
    
};