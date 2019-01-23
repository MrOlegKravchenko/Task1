// var Fx = (event) => {
//     event.preventDefault();
//     console.log(event)
//     var txt =  document.getElementById("txtCopy").value;
//     console.log(txt)
//     document.getElementById("txtPaste").innerText = txt ;
// }
// var btn = document.getElementById('btn');
// btn.addEventListener('click', Fx(event));

var btn = document.getElementById('btn');

var arrayOfForm = [];

arrayOfForm[0] = {
    Ttl: "",
    Txt: ""
}


btn.addEventListener('click',(event) =>{
    event.preventDefault();
    var noteTitle = document.getElementById("user-title").value;
    var noteText = document.getElementById("user-text").value;
    document.getElementById('sticer-title').innerText = noteTitle;
    document.getElementById('sticer-text').innerText = noteText;
});