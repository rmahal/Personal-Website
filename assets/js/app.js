$( document ).ready(function() {
    console.log("Document ready")


    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 80
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    $(function() {
        $.getJSON('assets/jokes.json', function(data) {
            console.log("DATA:")
            console.log(data)
            var len = data.jokes.length
            var counter = Math.floor(Math.random() * len);
            var elem = document.getElementsByClassName("quote");
            function change() {
                $(elem).fadeTo(10000, 0, function() {
                    this.innerHTML = data.jokes[counter];
                    counter = ++counter % len;
                    $(this).fadeTo(10000, 1, change)
                })
            }

        });
    });
})