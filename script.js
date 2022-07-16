

//am create functie care sterge lista  ca sa stearga lista trebuie de adaugat la obiectele comandate de acaugat in tag li clasa order ListRemove
const deleteLi= document.querySelectorAll('.btn-remove')
const listaOrdere = document.querySelector('.orderListRemove')
deleteLi.forEach((e)=>{
    e.addEventListener('click',()=>{
        console.log(listaOrdere);
        listaOrdere.remove()
    })
})