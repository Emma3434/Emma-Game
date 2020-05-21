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
        .then(response => response.text())
        .then(result =>{
            console.log(result);
            if (result.success){
                alert("discussion successfully got");
            }
        })
        .catch(error => console.log('error', error));
}
