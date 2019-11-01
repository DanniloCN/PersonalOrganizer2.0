var usersList = document.getElementById('usersList');
var inputEmail = document.getElementById("inputEmail");
var inputPassword = document.getElementById("inputPassword");
var btnCriar = document.getElementById("btnCriar");


btnCriar.addEventListener('click', function() {
    create(inputEmail.value, inputPassword.value);

    });

    function create(email, password) {
        var data = {
            email: email,
            password: password
        };

        return firebaseConfig.database().ref().child('users').push(data);
    }

    firebaseConfig.database().ref('users').on('value', function (snapshot){
        usersList.innerHTML = '';
        snapshot.forEach(function (item) {
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(item.val().email + ': ' + item.val().password));
            usersList.appendChild(li);
        });
 
    });