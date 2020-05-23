get_discussion();

function get_discussion()
{
    var myHeaders = new Headers();
    myHeaders.append("Authorization", localStorage.getItem("token"));

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://emma-game-server.herokuapp.com/discussions", requestOptions)
        .then(response => response.json())
        .then(result =>{
            console.log(result);
            for(i = 0; i < result.discussion.length; i++)
            {
                $('<li class="list-group-item"><span class="discussion-title"><a id="discussion-heading" href = "https://emma-game.herokuapp.com/discussions/'+result.discussion[i]._id+'">#'+result.discussion[i].topic+'</a></span><span id="discussion-admin" class="discussion-admin">@'+result.discussion[i].admin+'</span><span id="discussion-description" class="discussion-description">'+result.discussion[i].description+'</span></li>').appendTo($('#discussions'));
            }

        })
        .catch(error => console.log('error', error));
}

function create_discussion(){
    var topic = document.getElementById("discussion-create-topic").innerHTML;
    var admin = document.getElementById("discussion-create-admin").innerHTML;
    var description = document.getElementById("discussion-create-description").innerHTML;

    var myHeaders = new Headers();
    myHeaders.append("Authorization", localStorage.getItem("token"));
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"admin":admin,"topic":topic,"description":description});

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://emma-game-server.herokuapp.com/discussions", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result);
            if (result.success == "true")
            {
                alert(result.message);
            }
            else
            {
                alert("This request is not ok!")
            }
        })
        .catch(error => console.log('error', error));
}