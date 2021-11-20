function display(val){
    let display = document.getElementById('display').getElementsByTagName('p')[0].innerHTML;
    if(display == '0' || display == 'Infinity')
        document.getElementById('display').getElementsByTagName('p')[0].innerHTML = val;
    else
        document.getElementById('display').getElementsByTagName('p')[0].innerHTML += val;
}

function clr(){
    document.getElementById('display').getElementsByTagName('p')[0].innerHTML = '0';
}

function del(){
    let str = document.getElementById('display').getElementsByTagName('p')[0].innerHTML;
    let editedStr = str.slice(0, -1);
    if(editedStr == '')
        editedStr = '0';
    document.getElementById('display').getElementsByTagName('p')[0].innerHTML = editedStr;
}

function equals(){
    let str = document.getElementById('display').getElementsByTagName('p')[0].innerHTML;
    let evalStr = eval(str);

    document.getElementById('display').getElementsByTagName('p')[0].innerHTML = evalStr;
}