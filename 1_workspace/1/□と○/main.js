const figure = document.getElementById("figure")
console.log(figure.className)


figure.onclick = function(){
    if (figure.className === "transition square")
    {figure.className = "transition rounded"}
        else if  (figure.className === "transition rounded")
        {figure.className = "transition triangle"}
        else if (figure.className === "transition triangle")
        {figure.className = "transition square"}
}