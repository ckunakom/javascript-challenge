// Assign data from data.js
var tableData = data;

// AUTOMATIC TABLE //
// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop through data and ...
data.forEach((ufoData) => {

    // Use D3 to append a table row (tr) for each UFO data object
    var row = tbody.append("tr");

    // Use `Object.entries` to get the values within each key of JSON
    Object.entries(ufoData).forEach(([key, value]) => {
        // Append a cell to the row for each value in JSON
        var cell = row.append("td");
        // Use D3 to update each cell's text with values in UFO data object
        cell.text(value);
    });
});

// DATA SEARCH //
// Select the form & filter button
var form = d3.select("form");
var button = d3.select("#filter-btn");

// Create event handlers 
form.on("submit", filterEvent);
button.on("click", filterEvent);

// Complete the event handler function for the form
function filterEvent() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputDate = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");

    // Get the value property of the input element
    var inputDateValue = inputDate.property("value");
    var inputCityValue = inputCity.property("value");
    var inputStateValue = inputState.property("value");
    var inputCountryValue = inputCountry.property("value");
    var inputShapeValue = inputShape.property("value");

    // FILTERING SPREE //
    // (A FRIEND HELPED OUT WITH THIS IDEA AND SET-UP) 
    // Make a copy of the tableData to narrow down each search result to be displayed for final filter
    var filterData = tableData;

    // Starter length of data
    console.log('------------------------------------------------------')
    console.log(`There are ${filterData.length} results initially.`);

    // Setting date condition: if date exists in the data table
    if (inputDateValue.length != 0) {
        // Filter the data table to be of the date input
        filterData = filterData.filter(item => item.datetime === inputDateValue);
        // Display # of results after first filter..
        console.log(`${filterData.length} result(s) found after filtered by date.`);
    }
   
    // Setting city condition: if city exists in the data table
    if (inputCityValue.length != 0) {
        // Filter the data table to be of the city input
        filterData = filterData.filter(item => item.city === inputCityValue);    
        // Display # of results after second filter..
        console.log(`${filterData.length} result(s) found after filtered by city.`);
    }

    // Setting state condition: if state exists in the data table
    if (inputStateValue.length != 0) {
        // Filter the data table to be of the state input
        filterData = filterData.filter(item => item.state === inputStateValue);    
        // Display # of results after second filter..
        console.log(`${filterData.length} result(s) found after filtered by state.`);
    }

    // Setting country condition: if country exists in the data table
    if (inputCountryValue.length != 0) {
        // Filter the data table to be of the country input
        filterData = filterData.filter(item => item.country === inputCountryValue);    
        // Display # of results after second filter..
        console.log(`${filterData.length} result(s) found after filtered by country.`);
    }

    // Setting shape condition: if shape exists in the data table
    if (inputShapeValue.length != 0) {
        // Filter the data table to be of the shape input
        filterData = filterData.filter(item => item.shape === inputShapeValue);    
        // Display # of results after second filter..
        console.log(`${filterData.length} result(s) found after filtered by shape.`);
    }

    // Then, select the table body
    var tableResult = d3.select("tbody");

    // remove any data from the table
    tbody.html("");

    // Return final filter result if there's any
    if (filterData.length !== 0) {
        filterData.forEach((ufoData) => {

            // Use D3 to append a table row (tr) for each UFO data object
            var row = tbody.append("tr");
    
            // Use `Object.entries` to get the values within each key of JSON
            Object.entries(ufoData).forEach(([key, value]) => {
                // Append a cell to the row for each value in JSON
                var cell = row.append("td");
                // Use D3 to update each cell's text with values in UFO data object
                cell.text(value);
            });
        });
    }
    // Otherwise, tell user to redo the search
    else {
        // Use D3 to append a table row (tr) for each UFO data object
        tbody.append("tr").text('No results. Please search again.');
    }
};

// RESET TABLE //
// Create reset button
var buttonReset = d3.select("#reset-btn");
buttonReset.on("click", clickReset);

// Complet resent event handler
function clickReset() {
    // remove any data from the table
    tbody.html("");

    // add data
    data.forEach((ufoData) => {

        // Use D3 to append a table row (tr) for each UFO data object
        var row = tbody.append('tr');
    
        // Use `Object.entries` to get the values within each key of JSON
        Object.entries(ufoData).forEach(([key, value]) => {
            // Append a cell to the row for each value in JSON
            var cell = row.append('td');
            // Use D3 to update each cell's text with values in UFO data object
            cell.text(value);
        });
    });
    console.log('------------------------------------------------------')
    console.log(`There are currently ${data.length} results.`);
};