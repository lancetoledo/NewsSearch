$(document).ready()

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election" + "&api-key=mMQS7bMEx7WNaUhAFooBCKpBfZmfxsXA"

$.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

            console.log(response);

            $('#find-news').on("click", function (event) {
                console.log("it works!")
                var search = $('#searchTerm').val();
                var records = $('#numberOfRecords').val();

                var startyear = $('#startYear').val();

                var endyear = $('#endYear').val();

                var queryUrl;
                if (search && !startyear && !endyear) {
                    queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election" + "&api-key=mMQS7bMEx7WNaUhAFooBCKpBfZmfxsXA" + "&q=" + search;
                }






            })

        })