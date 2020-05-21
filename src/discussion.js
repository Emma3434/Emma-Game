get_discussion();
function get_discussion()
{
    var myHeaders = new Headers();
    myHeaders.append("Authorization",
        localStorage.getItem("token"));

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://emma-game-server.herokuapp.com/discussions", requestOptions)
        .then(response => response.json())
        .then(result =>{
            console.log(result);
            $('<li class="list-group-item"><span class="disscussion-title"><a id="discussion-heading" href="#">'+result.discussion.topic+'</a></span><span id="discussion-admin" class="discussion-admin">@'+result.discussion.admin+'</span><span id="discussion-description" class="discussion-description">'+result.discussion.description+'</span></li>').appendTo($('#discussions'));
        })
        .catch(error => console.log('error', error));



}
