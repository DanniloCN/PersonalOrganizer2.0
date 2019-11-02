var inputEmail = document.getElementById("inputEmail");
var inputEmail = document.getElementById("inputPassword");
var btnCriar = document.getElementById("btnCriar");
var btnLogin = document.getElementById("btnLogin");
var inputFirstName = document.getElementById("inputFirstName");
var inputLastName = document.getElementById("inputLastName");



btnCriar.addEventListener('click', function() {
    firebase
        .auth()
        .createUserWithEmailAndPassword(inputEmail.value, inputPassword.value)
        .then(function() {
            alert('Você foi cadastrado');
            databaseName(inputFirstName.value, inputLastName.value)
        })
        .catch(function(error) {
            console.log(error.code);
            console.log(error.message);
            alert('Houve algum erro, verifique o console');
        })

});

function databaseName(nome, sobrenome) {
    let data = {
        nome: nome,
        sobrenome: sobrenome
    }
    firebase.database().ref().child("user").push(data);
}

btnLogin.addEventListener('click', function() {

    firebase.auth().signInWithEmailAndPassword(inputEmail.value, inputEmail.value).then(function(result) {
        alert("Usuário conectado!");

    }).catch(function(error) {

        var errorCode = error.code;
        var errorMessage = error.message;

        alert(errorMessage);

    });

});