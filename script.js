// Now let us grab the buttons from the html file
document.getElementById("getText").addEventListener("click", getText);
document.getElementById("getUser").addEventListener("click", getUser);
document.getElementById("getUsers").addEventListener("click", getUsers);

function getText() {
    let xhr = new XMLHttpRequest();
    // console.log(xhr);
    xhr.open("GET", "sample.txt", true);
    xhr.onload = function () {
        if (this.status === 200) {
            // console.log(this.responseText);
            document.getElementById("output").innerHTML = this.responseText;
        }
    }
    xhr.send();
}

function getUser(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "user.json", true);
    xhr.onload = function (){
        if(this.status === 200){
            let user = JSON.parse(this.responseText);
            // console.log(this.responseText);
            let output = `<h2> User </h2>`;
            output += `
                <ul>
                    <li> ID: ${user.id} </li>
                    <li> NAME: ${user.name} </li>
                </ul>
            `
            document.getElementById("output").innerHTML = output;
        }
    }
    xhr.send();
}

function getUsers(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "users.json", true);
    xhr.onload = function () {
        // console.log(this.responseText);
        let users = JSON.parse(this.responseText);
        let output = `<h2> Users </h2>`;

        users.forEach(user => {
            output += `
        <ul>
            <li> ID: ${user.id} </li>
            <li> NAME: ${user.name} </li>
        </ul>
            `
            document.getElementById("output").innerHTML = output;
        });
    }
    xhr.send();
}