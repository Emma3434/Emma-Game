window.document.getElementsByTagName("body")[0];

function sendmessage()
{
    time = new Date();
    message = $("#input").val();
    //username = req.body.username();

    if($.trim(message) == '') {
        return false;
    }

    $('<li class="list-group-item align-items-xl-start comment"><img class="profile-chat" src="https://emmagame.bss.design/assets/img/%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F.jpg?h=34454633352f5133a154d68fba8127d0"><div><span class="d-block"> anonymous</span><span class="border rounded border-primary shadow-sm d-block message">'+ message +'</span><span class="d-block">'+time+'</span></div></li>').appendTo($('#discussion'));
    $('#input').val(null);
    //alert ("Message sent!");
}


//not working but only a matter of format
/*
function newMessage() {
    message = $(".message-input input").val();
    if($.trim(message) == '') {
        return false;
    }
    $('<li class="sent"><img src="http://emilcarlsson.se/assets/mikeross.png" alt="" /><p>' + message + '</p></li>').appendTo($('.messages ul'));
    $('.message-input input').val(null);
    $('.contact.active .preview').html('<span>You: </span>' + message);
    $(".messages").animate({ scrollTop: $(document).height() }, "fast");
};*/

