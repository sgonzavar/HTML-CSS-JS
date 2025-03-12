$(document).ready(function () {
    console.log("ready");


    let span = $('span');
    console.log(span.text());

    span.css('border','1px solid black');


    let a = $(['title="google"']);
    console.log(a);

    let show = $('#show');
    let hide = $('#hide');
    let parrafo = $('#parrafo');

    show.click(function () {
        parrafo.html("diste click en show");
    });

    hide.click(function () {
        parrafo.html("diste click en hide");
        parrafo.hide(3000);
    });
})