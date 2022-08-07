const second =1000;
const minute =second*60;
const hour = minute*60;
const day = hour*24;
let first = document.getElementById("dateint");
let next = document.getElementById("dateend")
function county(){
    let date_inii= new Date(first.value);
    let date_endd = new Date(next.value);

    let differnce = date_endd.getTime() - date_inii.getTime();
    let result =Math.floor(differnce/day);
    if(result<=1){
        result=result + " Day"
    }else{
        result=result+ " Days"
    }
    document.getElementById("days").innerHTML= result;
}
