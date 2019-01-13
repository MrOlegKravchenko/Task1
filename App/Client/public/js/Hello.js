// var name = 'oleg';
// // alert(name+' motherf*cker');
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
// btn.onclick = function(e){
//     e.preventDefault();
//     alert('asd')
//     var txt =  document.getElementById("txtCopy").value;
//     console.log(txt)
//     document.getElementById("txtPaste").innerText = txt ;
// }


var arrayOfForm = [];

arrayOfForm[0] = {
    Ttl: "",
    Txt: ""
}

btn.onclick = function fx(){
    var noteTitle = document.getElementById("user-title").value;
    var noteText = document.getElementById("user-text").value;
    console.log(noteTitle)
    console.log(noteText)
    arrayOfForm[0].Ttl = noteTitle;
    arrayOfForm[0].Txt = noteText;
    console.log(arrayOfForm[0]);
}


btn.addEventListener('click', fx.bind(this));