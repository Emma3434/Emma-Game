window.addEventListener('load', discussion_set_admin);
function discussion_set_admin(){
    document.getElementById("discussion-create-admin").innerHTML = document.getElementById("user").innerHTML;
    console.log(document.getElementById("discussion-create-admin").innerHTML);
    console.log(document.getElementById("user").innerHTML);
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
                alert(result.message);
        })
        .catch(error => console.log('error', error));
}