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

     init();

    function loadJSON(callback) {   

        var xobj = new XMLHttpRequest();
            xobj.overrideMimeType("application/json");
        xobj.open('GET', 'assets/jokes.json', true);
        xobj.onreadystatechange = function () {
              if (xobj.readyState == 4 && xobj.status == "200") {
                callback(xobj.responseText);
              }
        };
        xobj.send(null);  
     }

     function init() {
        loadJSON(function(response) {
           var actual_JSON = JSON.parse(response);
           console.log(actual_JSON)
        });
       }




})