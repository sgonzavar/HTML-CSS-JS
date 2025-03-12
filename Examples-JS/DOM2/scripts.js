console.log("enlazado");

const show = () => {
    let allData = document.forms['form'];
    let text = "";
    for (element of allData) {
        text += element.value + "<br/>"
    }
    document.getElementById('result').innerHTML = text;
}