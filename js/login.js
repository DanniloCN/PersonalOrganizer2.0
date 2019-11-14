var inputEmail = document.getElementById("inputEmail");
var inputPassword = document.getElementById("inputPassword");
var btnLogin = document.getElementById("btnLogin");
var inputFirstName = document.getElementById("inputFirstName");
var inputLastName = document.getElementById("inputLastName");

btnLogin.addEventListener('click', function() {
    firebase
        .auth()
        .signInWithEmailAndPassword(inputEmail.value, inputPassword.value)
        .then(function(result) {
            console.log(result);
            alert('Autenticado');
            window.location.assign("home.html");
        })
        .catch(function(error) {
            console.error(error.code);
            console.error(error.message);
            alert("Falha ao autenticar, verifique o erro no console")
        })
});