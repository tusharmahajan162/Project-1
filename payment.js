

document.querySelector("form").addEventListener("submit", getData)

function getData() {
    event.preventDefault()

    let cn = document.getElementById("cname").value
    let cnu = document.getElementById("ccnum").value
    let expm = document.getElementById("expmonth").value
    let expy = document.getElementById("expyear").value
    let cv = document.getElementById("cvv").value


    // if (cn === "" || cnu === "" || expm === "" || expy === "" || cv === "") {
    //     alert("Enter all the fields")
    // } else {
    //     alert(Congrats!! Your order is placeed)
    //     //     window.location.href = './payment.html'
    // }

    if (cn == "" || expm === "" || cnu === "" || expy === "" || cv === "") {
        alert("Enter all the fields")
    } else {
        alert("Congrats !! Your order is placed .")
        window.location.href = 'index.html'
    }
}