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
            for(i = 0; i < result.discussion.length;i++)
            {
                $('<li class="list-group-item"><span class="disscussion-title"><a id="discussion-heading" href="https://emma-game.herokuapp.com/discussion/content" onclick="save_topic()">#'+result.discussion[i].topic+'</a></span><span id="discussion-admin" class="discussion-admin">@'+result.discussion[i].admin+'</span><span id="discussion-description" class="discussion-description">'+result.discussion[i].description+'</span></li>').appendTo($('#discussions'));
            }

        })
        .catch(error => console.log('error', error));
}

function save_topic(){
    localStorage.setItem("topic", document.getElementById("discussion-heading").value);
}