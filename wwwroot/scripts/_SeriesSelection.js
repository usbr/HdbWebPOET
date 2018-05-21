//Date range picker with time picker
$('#input-date-times').daterangepicker({ timePicker: true, timePickerIncrement: 30, format: 'MM/DD/YYYY h:mm A' })

//Date range as a button
$('#daterange-btn').daterangepicker(
    {
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        },
        startDate: moment().subtract(29, 'days'),
        endDate: moment()
    },
    function (start, end) {
        $('#input-date-times').te.html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'))
    }
)
function toggleDataType() {
    var rDisabled = document.getElementById('optionsRadios1').checked;
    if (rDisabled) {
        $("#modelrunid-input").prop("disabled", true);
        $("#modelid-dropdown").prop("disabled", true);
        $("#modelrunid-dropdown").prop("disabled", true);
    }
    else {
        $("#modelrunid-input").prop("disabled", false);
        $("#modelid-dropdown").prop("disabled", false);
        $("#modelrunid-dropdown").prop("disabled", false);
    }
}
function selectAllObjectTypes() {
    var allChecked = document.getElementById('object-types-select-all').checked;
    if (allChecked) {
        $('#object-types-dropdown option').prop('selected', true);
    }
    else {
        $('#object-types-dropdown option').prop('selected', false);
    }
}