window.addEventListener('load', get_messages);
function get_messages()
{
    var myHeaders = new Headers();
    myHeaders.append("Authorization", localStorage.getItem("token"));

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://emma-game-server.herokuapp.com/discussions/5ebf10fa0948030004a91b50", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result);
            if (result.success)
            {
                alert("successfully got the result discussion!");
            }
            /*
            for (i = 0 ; i < result.discussion.comments.length ; i++){
                $('<li class="list-group-item align-items-xl-start comment"><img class="profile-chat" src="../image/default.jpg"><div><span class="d-block">'+result.discussion.comments[i].username+'</span><span class="border rounded border-primary shadow-sm d-block message">'+ result.discussion.comments[i].message +'</span><span class="d-block">'+result.discussion.comments[i].time+'</span></div></li>').appendTo($('#discussion'));*/
            }
        })
        .catch(error => console.log('error', error));
}

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



