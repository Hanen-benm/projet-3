function draw(espace,deese){
    ligne='';
    for (i=0;i<espace;i++) ligne+=' ';
    for (i=0;i<deese;i++) ligne+='#';
    return ligne;
}
function pyramide(etages){
    if (etages<=25)     
    for (x=1;x<=etages;x++){
        es=etages-x+1;
        de=etages-es+x;
        console.log(draw(es,de));
    }
}
pyramide(prompt('combien d\'etages ?', '5'));