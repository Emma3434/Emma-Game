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
                $('<li class="list-group-item"><span class="disscussion-title"><a id="discussion-heading"  onclick="save_id()" href = "https://emma-game.herokuapp.com/discussion/'+result.discussion[i]._id+'">#'+result.discussion[i].topic+'</a></span><span id="discussion-admin" class="discussion-admin">@'+result.discussion[i].admin+'</span><span id="discussion-description" class="discussion-description">'+result.discussion[i].description+'</span><p id="discussion-id'+i+'">'+result.discussion[i]._id+'</p></li>').appendTo($('#discussions'));
            }

        })
        .catch(error => console.log('error', error));
}