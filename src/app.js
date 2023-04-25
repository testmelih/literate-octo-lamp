// Select the circles
const circles = document.querySelectorAll('.circle');

// Select the ring image
const ringImage = document.getElementById('ring-image');

// Select the overlay
const overlay = document.getElementById('overlay');

// Select the diameter input
const diameterInput = document.getElementById('diameter-input');

// Select the calculate button
const calculateButton = document.getElementById('calculate-button');

// Add an event listener to each circle
circles.forEach(circle => {
  circle.addEventListener('click', () => {
    // Add a class of "active" to the clicked circle
    circle.classList.add('active');

    // Remove the "active" class from all other circles
    circles.forEach(otherCircle => {
      if (otherCircle !== circle) {
        otherCircle.classList.remove('active');
      }
    });

    // Update the ring image source to match the selected size
    const size = circle.dataset.size;
    ringImage.src = `images/ring-${size}.png`;
  });
});

// Add an event listener to the ring image
ringImage.addEventListener('click', () => {
  // Show the overlay
  overlay.style.display = 'flex';
});

// Add an event listener to the calculate button
calculateButton.addEventListener('click', () => {
  // Get the diameter input value
  const diameter = diameterInput.value;

  // Calculate the circumference using the formula C = πd
  const circumference = Math.PI * diameter;

  // Round the circumference to 2 decimal places
  const roundedCircumference = circumference.toFixed(2);

  // Update the overlay content with the calculated circumference
  const overlayContent = `
    <p>The circumference of your ring is:</p>
    <p>${roundedCircumference} mm</p>
  `;
  overlay.querySelector('div').innerHTML = overlayContent;
});

// Add an event listener to the overlay
overlay.addEventListener('click', () => {
  // Hide the overlay
  overlay.style.display = 'none';
});
