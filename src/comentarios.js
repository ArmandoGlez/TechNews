var firebaseConfig = {
    apiKey: "AIzaSyDzWJ6O2h8TnNdL66bYBJvQk_YZ9BYNEiE",
    authDomain: "projectn-26865.firebaseapp.com",
    projectId: "projectn-26865",
    storageBucket: "projectn-26865.appspot.com",
    messagingSenderId: "1001975324836",
    appId: "1:1001975324836:web:9fa55b9f31058ba937c631",
    measurementId: "G-6LR3QK8LJY"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
var postsRef = db.collection("posts");

var form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe normalmente

    // Obtén los valores del formulario
    var title = form.elements["nameInput"].value;
    var description = form.elements["commentInput"].value;


    // Crea un nuevo documento en la colección "posts"

    postsRef.add({
            title: title,
            description: description
        })
        .then(function(docRef) {
            Swal.fire(
                'Mensaje Enviado!',
                'Gracias por comentar!',
                'success'
            )
            document.getElementById("myForm").reset();
            // Realiza alguna acción adicional después de enviar los datos

        })
        //MARCA ERROR SI SUCEDE ALGUNA EXCEPCION
        .catch(function(error) {
            Swal.fire((error),
                'No se envió el mensaje',
                'Es todo lo que sabemos',
                'error'
            )
        });
});