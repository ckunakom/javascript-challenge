// Assign data from data.js
var tableData = data;

// AUTOMATIC TABLE //
// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop through data and ...
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

// DATA SEARCH //
// Select the form & filter button
var form = d3.select("form");
var button = d3.select("#filter-btn");

// Create event handlers 
form.on("submit", runEnter);
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Print the value to the console
    console.log(inputValue);

    // Filter the data table to be of the date input
    var filterData = tableData.filter(date => date.datetime === inputValue);

    console.log(filterData);

    // Then, select the unordered list element by class name
    var tableResult = d3.select("tbody");

    // remove any children from the list to
    tableResult.html("");

    filterData.forEach((ufoData) => {

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
};