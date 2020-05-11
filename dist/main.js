


let render = new Renderer()
let model = new Manager()



$(window).on(`load`, () => {
    model.getDataFromDB();
    render.renderSaved(model.savedCities);
});


$('#search-it').on('click', function () {
    model.getDataFromDB()
})
