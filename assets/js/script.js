const campos = document.querySelectorAll("input")

campos.forEach((obj) => {
    obj.addEventListener('keyup', digitou)
})

const arr = {
    senha: ""
}

console.log(arr.senha.length)

function digitou(e){
    if(e.key == "Backspace"){
        return ""
    } else if(e.key == "Shift") {
        return ""
    }
    arr.senha += e.key

    console.log(arr)
}