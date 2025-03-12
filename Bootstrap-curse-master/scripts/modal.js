$(function(){
    $('#exampleModal').on('show.bs.modal', function (event) {
        $('#btnReservation').removeClass('btn-outline-primary');
        $('#btnReservation').addClass('btn-primary');
        $('#btnReservation').prop('disabled', true);        
    });    
});