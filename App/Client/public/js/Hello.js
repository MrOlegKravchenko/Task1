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


function fx(event){
    event.preventDefault();
    console.log(event)
    var txt =  document.getElementById("txtCopy").value;
    console.log(txt)
    document.getElementById("txtPaste").innerText = txt ;
}


btn.addEventListener('click', fx.bind(this));