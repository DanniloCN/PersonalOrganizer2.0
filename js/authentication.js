var inputEmail = document.getElementById("inputEmail");
var inputPassword = document.getElementById("inputPassword");
var btnCriar = document.getElementById("btnCriar");
var inputFirstName = document.getElementById("inputFirstName");
var inputLastName = document.getElementById("inputLastName");



btnCriar.addEventListener('click', function() {
    firebase
        .auth()
        .createUserWithEmailAndPassword(inputEmail.value, inputPassword.value)
        .then(function () {
            alert('Você foi cadastrado');
            databaseName(inputFirstName.value, inputLastName.value )
        })
        .catch(function (error) {
            console.log(error.code);
            console.log(error.message);
            alert('Houve algum erro, verifique o console');
        })

    });
    function databaseName(nome, sobrenome){
        let data = {
            nome: nome,
            sobrenome: sobrenome
        }
        firebase.database().ref().child("user").push(data);
    }