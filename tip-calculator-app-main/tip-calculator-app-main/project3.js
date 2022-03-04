let bill = document.getElementById("bill");
let people = document.getElementById("people");
let tip = document.getElementById("tip");
let total = document.getElementById("total");
let custom = document.getElementById("custom");
let percents = document.querySelectorAll(".percent");
var i;
var u = 0;
percents.forEach((percent) => {

    percent.addEventListener("click", handleclick)

})


custom.oninput = () => {
    var x = bill.value;
    var ci = custom.value
    var y = people.value
    if (y == 0) {
        y = 1
    }

    output(x, y, ci)
}





bill.oninput = () => {
    var y = 1
    var x = bill.value;





}

people.oninput = () => {
    var x = bill.value;
    var y = people.value;
    var ci = custom.value
    if (y == 0) {
        y = 1
    }
    if (u == 0 && ci == null) {
        u = 15;
    } else {
        u = ci
    }
    var tip_per = u
    output(x, y, tip_per);


}


function output(x, y, tip_per) {



    var tp = (((tip_per / 100) * x) / y);
    tp = tp.toFixed(2)
    tip.innerText = '$' + tp;

    var tm = (x / y) + tp / 1

    tm = tm.toFixed(2)



    total.innerText = "$" + tm


}

function handleclick(event) {
    percents.forEach(val => {
        val.classList.remove('active')
        if (event.target.innerHTML == val.innerHTML) {
            val.classList.add('active')

            var o = val.innerHTML;

            o = o.replace('%', '')
            o = parseInt(o)
            u = o

            x = bill.value
            y = people.value
            if (y == 0) {
                y = 1
            }
            output(x, y, o)

        }


    })


    return u;
}