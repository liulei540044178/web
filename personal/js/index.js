/**
 *
 * Created by sz160808 on 2016/8/31.
 */

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


$('#myAffix').affix({
    offset: {
        top:50,

        bottom: function () {

            return (this.bottom = $('footer').outerHeight(true))
        }
    }
})

$('#btn').trigger('click');
