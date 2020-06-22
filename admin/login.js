var x = document.getElementById("email");
var p = document.getElementById("password");

document.getElementById("form").addEventListener("submit",(ee)=>{
    ee.preventDefault();
    console.log(x.value);
    console.log(p.value);
    if (x.value=="admin@gmail.com" && p.value=="admin") {
        Swal.fire({
            titel:'Welcome',
            html:'Access granted',
            icon:'success'
        });
        setTimeout(() => {
            loadPage();
        }, 3000);
    } else {
        Swal.fire({
            titel:'ERROR!',
            html:'Access denied!',
            icon:'error'
        });
    }
    function loadPage(){
        window.location.href="./admin.html";
    }
});