// Get the ring circle element
var ringCircle = document.getElementById("ringCircle");

// Add event listener for when the ring circle is clicked
ringCircle.addEventListener("click", function(event) {
    // Get the size of the ring circle
    var ringSize = getRingSize(event.offsetX, event.offsetY);
    
    // Update the ring size text
    document.getElementById("ringSize").textContent = "Ring Size: " + ringSize;
});

// Function to calculate the ring size based on the clicked position
function getRingSize(x, y) {
    // Calculate the distance from the center of the circle
    var distance = Math.sqrt(Math.pow(x - 150, 2) + Math.pow(y - 150, 2));
    
    // Adjust the distance to match the desired ring size range
    var ringSize = 1 + Math.floor(distance / 20);
    
    return ringSize;
}
