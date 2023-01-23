 
 var [boton] = $('#boton');
 var url = "http://localhost:5000/amigos";
 var [lista] = $('#lista');
 var [search] = $('#search');
 var [borrar] = $('#delete');

 var listFriends = (response)=>{
    var [lista] = $("#lista");
    response.forEach((friend) => {
        var newLi = document.createElement('li');
        newLi.innerText = friend.name;
        lista.appendChild(newLi);
        
    });
 }

 var showFriends = () =>{
    //lista.innerHTML = ""; // para que no se duplique el array
    $("#lista").empty() // metodo para que no se duplique el array - metodo Jquery
    $.get(url, listFriends);
 }

var searchFriend = () =>{
    var id = $('#input').val(); //metodo Jquery
    console.log(id)
    $.get(`${url}/${id}` , (response) =>{
        $("#amigo").text(response.name)
    })
}

var deleteFriend = ()=>{
    var[inputDelete] = $("#inputDelete")
    var id = inputDelete.value;
    $.ajax({
        url: `${url}/${id}`,
        type: 'DELETE',
        success: function(resultado) {
            
            var borrado = document.querySelector('#success')
            borrado.textContent = " Fue Borrado con Exito"
        }
    })
    console.log(id)
}

 boton.addEventListener('click', showFriends);
 search.addEventListener('click', searchFriend);
 borrar.addEventListener('click', deleteFriend);