function sendmessage()
{
    time = new Date();
    var message = document.getElementById("input").value;
    //username = req.body.username();

    if(message === '') {
        alert("Cannot send empty message")
    }

    $('<li class="list-group-item align-items-xl-start comment"><img class="profile-chat" src="https://emmagame.bss.design/assets/img/%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F.jpg?h=34454633352f5133a154d68fba8127d0"><div><span class="d-block"> anonymous</span><span class="border rounded border-primary shadow-sm d-block message">'+ message +'</span><span class="d-block">'+time+'</span></div></li>').appendTo($('#discussion'));
    document.getElementById("input").innerHTML = '';
    alert ("Message sent!");
}



