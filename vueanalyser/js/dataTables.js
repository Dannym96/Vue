 $(document).ready(function () {
    $('#datatable').DataTable({
        "order": [[ 0, 'asc' ]],
        dom: 'Bfrtip',
        "bInfo": false,
        buttons: [
            'copy',
            'csv',
            'excel',
            'pdf',
            'print'
        ],
        initComplete: function () {
            $('.buttons-pdf').html('<span class="fa fa-file-pdf-o" data-toggle="tooltip" title="Export To PDF"/>'),
                $('.buttons-copy').html('<span class="fa fa-clipboard" data-toggle="tooltip" title="Copy Table"/>'),
                $('.buttons-csv').html('<span class="fa fa-file-excel-o" data-toggle="tooltip" title="Export To CSV"/>'),
                $('.buttons-print').html('<span class="fa fa-print" data-toggle="tooltip" title="Print Table"/>')
        },
        // autoFill: true
        select: true,
        "oLanguage": {
            "sSearch": "",
            "oPaginate": {
                "sNext": "",
                "sPrevious": ""
            }
        },
        drawCallback: function (settings) {
            var pagination = $(this).closest('.dataTables_wrapper').find('.dataTables_paginate');
            pagination.toggle(this.api().page.info().pages > 1);
        }
    });
})
