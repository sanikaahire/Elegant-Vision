// Select elements
const track = document.querySelector('.carousel-track');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

// Keep track of the current scroll position
let currentIndex = 0;

// Function to scroll the carousel
const scrollCarousel = (direction) => {
  const cardWidth = document.querySelector('.card').offsetWidth + 16; // Card width + gap
  const trackWidth = track.scrollWidth; // Total width of the carousel
  const visibleWidth = track.offsetWidth; // Visible width of the container

  // Calculate new position
  const newPosition = currentIndex + direction * cardWidth;

  // Prevent overscrolling
  if (newPosition < 0 || newPosition > trackWidth - visibleWidth) return;

  // Update scroll position
  currentIndex = newPosition;
  track.style.transform = `translateX(-${currentIndex}px)`;
};

// Add event listeners for buttons
prevButton.addEventListener('click', () => scrollCarousel(-1));
nextButton.addEventListener('click', () => scrollCarousel(1));
