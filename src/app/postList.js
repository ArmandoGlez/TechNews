const postList = document.querySelector(".posts");


//EXPORTA LOS COMENTARIOS DE CLOUD FIREBASE AL HTML

export const setupPosts = (data) => {



    //SE REPETERIA HASTA QUE TODOS LOS COMENTARIOS SE MUESTREN
    if (data.length) {
        let html = "";
        data.forEach((doc) => {
            const post = doc.data();
            const li = `
        <li class="list-group-item list-group-item-action">
          <h5>${post.title}</h5> 
          <p>${post.description}</p>
        </li>
      `;
            html += li;
        });

        postList.innerHTML = html;


    } else {
        postList.innerHTML =
            '<h4 class="text-white">Inicia sesión para ver el buzón :)</h4>';
    }


};