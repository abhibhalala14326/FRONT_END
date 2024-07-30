// ? syntax dom

//! first
//! $(document).ready(function () {

// !    // jQuery methods go here...

//! });

//! second
// !$(function () {

// !    // jQuery methods go here...

//! });

// ? demo

// $(document).ready(function(){
//     $('#bt1').click(function()
// {
//     $('#mainid').hide()
// })
// })



// $(document).ready(function () {
//     $('#bt2').click(function () {
//         $('#mainid').show()
//     })
// })


$(function () {
    $('#show').click(function () {
        $('#mainbox').fadeIn('slow')
    })
})
$(function () {
    $('#hide').click(function () {
        $('#mainbox').fadeOut(10000)
    })
})