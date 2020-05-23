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

    var url = 'https://emma-game-server.herokuapp.com'+window.location.pathname;

    fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            document.getElementById("discussion-header").innerHTML = '#' + result.discussion[0].topic;
            for (i = 0 ; i < result.discussion[0].comments.length ; i++){
                $('<li class="list-group-item align-items-xl-start comment"><img class="profile-chat" src="../image/default.jpg"><div><span class="d-block">'+result.discussion[0].comments[i].username+'</span><span class="border rounded border-primary shadow-sm d-block message">'+ result.discussion[0].comments[i].message +'</span><span class="d-block">'+result.discussion[0].comments[i].time+'</span></div></li>').appendTo($('#discussion'));
            }
        })
        .catch(error => console.log('error', error));


}

function send_message()
{
    time = new Date().toGMTString();
    var message = document.getElementById("input").value;
    var username = document.getElementById("user").innerHTML;
    var discussion_header = document.getElementById("discussion-header").innerHTML.split("#");
    var topic = discussion_header[1];

    console.log("getelement of user: "+document.getElementById("user").innerHTML);
    console.log("username: "+username);

    if(message == '') {
        alert("Cannot send empty message");
    }

    var myHeaders = new Headers();
    myHeaders.append("Authorization", localStorage.getItem("token"));
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"username":username,"message":message,"topic":"the first discussion","time":"20200522 23:25"});

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://emma-game-server.herokuapp.com/comment", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result);
            $('<li class="list-group-item align-items-xl-start comment"><img class="profile-chat" src="../image/default.jpg"><div><span class="d-block">'+username+'</span><span class="border rounded border-primary shadow-sm d-block message">'+ message +'</span><span class="d-block">'+time+'</span></div></li>').appendTo($('#discussion'));
            document.getElementById("input").innerHTML = '';
        })
        .catch(error => console.log('error', error));

    /*
        var myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = {
            "username": username,
            "message": message,
            "topic": topic,
            "time": time
        };

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://emma-game-server.herokuapp.com/comment", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result);
                if (result.success)
                {
                    alert("thank you for sending comment on this topic!");
                    $('<li class="list-group-item align-items-xl-start comment"><img class="profile-chat" src="../image/default.jpg"><div><span class="d-block">'+username+'</span><span class="border rounded border-primary shadow-sm d-block message">'+ message +'</span><span class="d-block">'+time+'</span></div></li>').appendTo($('#discussion'));
                    document.getElementById("input").innerHTML = '';
                }
            })
            .catch(error => console.log('error', error));
*/
}



