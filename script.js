// Get DOM elements
const sizeRange = document.getElementById('sizeRange');
const ringSize = document.getElementById('ringSize');
const innerCircle = document.querySelector('.inner-circle');

// Add event listener for input range change
sizeRange.addEventListener('input', function () {
  const size = this.value;
  ringSize.textContent = size;
  innerCircle.style.width = `${size}%`;
  innerCircle.style.height = `${size}%`;
});

// Add event listener for toggle switch change
document.getElementById('toggleSwitch').addEventListener('change', function () {
  innerCircle.classList.toggle('hidden');
});
