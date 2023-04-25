// Get the ring circle and inner circle elements
var ringCircle = document.getElementById("ringCircle");
var innerCircle = document.getElementById("innerCircle");

// Get the size range input element
var sizeRange = document.getElementById("sizeRange");

// Add event listener for when the size range changes
sizeRange.addEventListener("input", function(event) {
    // Get the value of the size range
    var sizeValue = event.target.value;
    
    // Update the inner circle size based on the size range value
    innerCircle.style.width = sizeValue + "%";
    innerCircle.style.height = sizeValue + "%";
    
    // Update the ring size text
    document.getElementById("ringSize").textContent = "Ring Size: " + sizeValue;
});

// Add event listener for when the ring circle is clicked
ringCircle.addEventListener("click", function(event) {
    // Get the size of the ring from the size range
    var ringSize = sizeRange.value;
    
    // Update the ring size text
    document.getElementById("ringSize").textContent = "Ring Size: " + ringSize;
});
