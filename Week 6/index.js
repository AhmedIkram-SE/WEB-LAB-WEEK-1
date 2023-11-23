let count=0;
function forward() {
    count++;
    let fir_child=document.getElementById(`${count}`)
    let sec_child=fir_child.nextElementSibling;
    fir_child.classList.add('Filled');
    if(sec_child!=null){
    sec_child.classList.add('Filled_2');
}
}
function previous() {
    let fir_child=document.getElementById(`${count}`)
    let sec_child=fir_child.previousElementSibling;
    fir_child.classList.remove('Filled');
    fir_child.classList.add('circle');
    if(sec_child!=null){
    sec_child.classList.remove('Filled_2');
    sec_child.classList.add('line');
    }
    count--;
}