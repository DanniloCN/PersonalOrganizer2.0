var inputEmail = document.getElementById("inputEmail");
var inputPassword = document.getElementById("inputPassword");
var btnCriar = document.getElementById("btnCriar");
var inputFirstName = document.getElementById("inputFirstName");
var inputLastName = document.getElementById("inputLastName");
var tipoUsuario = document.getElementById("tipoUsuario")


btnCriar.addEventListener('click', function() {
    firebase
        .auth()
        .createUserWithEmailAndPassword(inputEmail.value, inputPassword.value, tipoUsuario.value)
        .then(function() {
            alert('Você foi cadastrado');
            databaseName(inputFirstName.value, inputLastName.value)
        })
        .catch(function(error) {
            console.log(error.code);
            console.log(error.message);
            alert('Houve algum erro, o e-mail já foi utilizado.');
        })

});

function databaseName(nome, sobrenome, tipoUsuario) {
    let data = {
        nome: nome,
        sobrenome: sobrenome,
        tipoUsuario: tipoUsuario
        
    }
    firebase.database().ref().child("user").push(data);
}