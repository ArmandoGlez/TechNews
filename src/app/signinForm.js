import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signInForm = document.querySelector("#login-form");

signInForm.addEventListener("submit", async(e) => {
    e.preventDefault();
    const email = signInForm["login-email"].value;
    const password = signInForm["login-password"].value;

    try {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(userCredentials)

        // cerrar el login
        const modal = bootstrap.Modal.getInstance(signInForm.closest('.modal'));
        modal.hide();

        // resetear el formulario
        signInForm.reset();

        // mostrar mensaje de bienvenida
        showMessage("Bienvenido " + userCredentials.user.email);

        const userEmailElement = document.getElementById("userEmail");
        userEmailElement.textContent = userCredentials.user.email;

    } catch (error) {
        if (error.code === 'auth/wrong-password') {
            showMessage("Contraseña Incorrecta", "error")
        } else if (error.code === 'auth/user-not-found') {
            showMessage("Usuario no encontrado", "error")
        } else {
            showMessage("Algo salió mal", "error")
        }
    }



});