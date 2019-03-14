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

    let url = 'https://rmahal.com/assets/jokes.json';

    fetch(url)
    .then(res => res.json())
    .then((out) => {
      console.log('Checkout this JSON! ', out);
    })
    .catch(err => { throw err });




    // fetch('./assets/jokes.json')
    // .then(response => response.json())
    // .then(json => console.log(json));
    // $.getJSON("./assets/jokes.json", function(json) {
        // console.log("JSON:")
        // console.log(json); // this will show the info it in firebug console
    // });

    //Calls the init function
    // init();
    //function to get and open the jokes json file to be read and handled
    // function loadJSON(callback) {   
    //     var xobj = new XMLHttpRequest();
    //         xobj.overrideMimeType("application/json");
    //     xobj.open('GET', './assets/jokes.json', true);
    //     xobj.onreadystatechange = function () {
    //           if (xobj.readyState == 4 && xobj.status == "200") {
    //             callback(xobj.responseText);
    //           }
    //     };
    //     xobj.send(null);  
    //  }
    //Function to parse json from the data file
    // function init() {
    //     loadJSON(function(response) {
    //         var actual_JSON = JSON.parse(response);
    //         console.log(actual_JSON)
    //     });
    // }


    var text = ['"Knock knock. Race condition. Who\'s there?"','"What\'s the best part about TCP jokes? <br> I get to keep telling them until you get them."', '"How many programmers does it take to screw in a light bulb? <br> None. It\'s a hardware problem."','"A guy walks into a bar and asks for 1.4 root beers. The bartender says \'I\'ll have to charge you extra, that\'s a root beer float\'. The guy says \'In that case, better make it a double."','"Debugging: Removing the needles from the haystack.”',
    '"There are only 10 kinds of people in this world: those who know binary and those who don\'t.”','"From the Random Shack Data Processing Dictionary: Endless Loop: n., see Loop, Endless. Loop, Endless: n., see Endless Loop."'];
    var counter = 0;
    var elem = document.getElementsByClassName("quote");

    function change() {
        $(elem).fadeTo(10000, 0, function() {
            this.innerHTML = text[counter];
            counter = ++counter % text.length;
            $(this).fadeTo(10000, 1, change)
        })
    }

    change()





})