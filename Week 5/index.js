function deleteFunction(){
    const a=document.getElementById('PID');
    const DID=document.getElementById('DIVID')
    DID.removeChild(a);
}
function addFunction(){
    
    const parent=document.getElementById('DIVID');
    parent.innerHTML+=`<h1> HEllo Pakistan </h1 >`;
}
function addGood(){
    const Tag=document.createElement('h1');
    const mytext=document.createTextNode('Hello World');
    Tag.setAttribute('class','G1');
    Tag.append(mytext);
    const parent1=document.getElementById('DIVID');
    parent1.append(Tag);
}


