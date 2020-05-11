class Renderer {

    renderSaved(data) {
        console.log(data);
        let source = $("#weather").html();
        let template = Handlebars.compile(source);
        let newHTML = template({ cities: data });
        $("#container") .empty().append(newHTML);
    }

    // renderCurrent(data) {
    //     const source = $("#currentCity-template").html();
    //     const template = Handlebars.compile(source);
    //     const newHTML = template({ cities: data });
    //     $(`#currentCityContainer`)
    //         .empty()
    //         .append(newHTML);
    // }

}


/*

    renferData(data) {
        $(`#weather-template`).empty()

        // turn our "template" into html
        let source = $('#store-template').html();

        // compile our template html using handlebars
        let template = Handlebars.compile(source);

        // fill our template with information
        let newHTML = template({ cities: data });

        // append our new html to the page
        $('.items').append(newHTML);

    }
}

*/