$(function() {
    const textarea = $("#burgerForm")

    const form = $("#formSubmit")

    // stop form from refreshing on ENTER
    form.on("submit", function (e){
        e.preventDefault()

        // Post Request
        $.ajax({
            url: "/",
            method: 'POST',
            data: {burger: textarea.val()}
        }).then(response => {
            location.reload();
        }).catch(err => { throw err })
    })

    // Put Request
    $(".devour").on("click", devourBurger)

    function devourBurger(){
        const id = $(this).attr("data-id")

        $ajax({
            url:"/" + id,
            method: 'PUT'
        }).then(response => {
            window.location = '/'
        }).catch (err => { throw err} )
    }
})