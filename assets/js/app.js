$( document ).ready(function() {
    console.log("Document ready")

    //Defining smooth scrolling on anchor tags
    $('a[href^="#"]').on('click', function (e) {
        //Prevents refresh
        e.preventDefault();
        //Define target
        var target = this.hash,
            $target = $(target);
        //Calls animate on the body and html
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 80
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    //Calls the init function
    init();


    //function to get and open the jokes json file to be read and handled
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

    //Function to parse json from the data file
    function init() {
        loadJSON(function(response) {
            var actual_JSON = JSON.parse(response);
            console.log(actual_JSON)
        });
    }




})