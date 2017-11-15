/*global $*/
$('form input[type="submit"]').click(sendForm);

function sendForm(e) {
    const form = $('form')[0];
    if (!form.checkValidity()) {
        return;
    }
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/nkosholka@gmail.com", 
        method: "POST",
        data: {
            name: $('#name').val(),
            mail: $('#mail').val(),
            message: $('#message').val()
        },
        dataType: "json"
    })
    .done(function(){
        $('form')[0].reset();
        $('#msg').html('Дякую за Ваше повідомлення!');
    })
    .fail(function(){
        $('#msg').html('Вибачте, сталася помилка');
    });
}