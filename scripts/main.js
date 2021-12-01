

function pickSize(size){

    const wrapSize = document.querySelector(".element__size");
    for(let i = 0; i < wrapSize.children.length;i++){
        wrapSize.children[i].classList.remove('picked-size');
    }
    document.querySelector('.' + size).classList.add(`picked-size`)


}