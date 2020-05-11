class Manager {

    constructor() {
        this.savedCities = []
    }

    useData = (data) => {
        data.forEach(c => {
            c.saved = true;
            this.savedCities.unshift(c);
        });
        // console.log(this.savedCities);
    }
    
    getDataFromDB() {
        $.ajax({
            method: "GET",
            url: `/cities`,
            success: this.useData,
            error: (xhr, test, error) => {
                console.log(error);
            }
        })
    }
    
    getCityData(cityName) {
        $.ajax({
            method: "GET",
            url: `/city/${cityName}`,
            success: (data) => {
                console.log(data);
            },
            error: (xhr, test, error) => {
                console.log(error)
            }
        })
    }
    
    saveCity(city) {
        $.ajax({
            method: "POST",
            url: "/city",
            data: city,
            success: (data) => {
                console.log(data);
            },
            error: (xhr, test, error) => {
                console.log(error)
            }
        })
    }
    
    removeCity(cityName) {
        $.ajax({
            method: "DELETE",
            url: `/city/${cityName}`,
            success: (data) => {
                console.log(data);
            },
            error: (xhr, test, error) => {
                console.log(error)
            }
        })
    }    
    
}

/*//another way to do get the data is  
    async getDataFromDB() {
        let data=await $.get("/cities")
        console.log(data);
    }
*/