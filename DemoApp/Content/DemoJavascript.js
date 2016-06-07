
//Jquery library
$('.newitem').click(function() {

   
    InModalView(this.id);
});

function InModalView(ruta, datastringparam) {
    AddWindowModal();
    var dataString = datastringparam;
    $.ajax({
        type: 'GET',
        url: ruta,
        data: dataString,
        success: function (data) {
          fillTabla('modaltable', data);
            $('#modalsup').modal('show');
        },
        error: function (req, stat, err) {

            fillTabla('modaltable', req.responseText);
            $('#modalsup').modal('show');


        }
    });

}

function AddWindowModal() {

    $('#modalcontainer').empty();
    $('#modalcontainer').append('<div class="modal fade" id="modalsup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> ' +
        '<div class="modal-dialog">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
        '</div>' +
        '<div class="modal-body"  >' +
        '<div style="text-align: center;"></div>' +
        '<table id="modaltable" >' +
        '<tr></tr>' +
        '<tbody></tbody>' +
        '</table>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>');


}

function fillTabla(idtabla, data) {
    var $tabla = $("#" + idtabla);
    $tabla.empty();
    $tabla.append(data);
}
