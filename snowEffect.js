// Add this script to your project

// Create a new JavaScript file named "snowEffect.js" and add this code
function createSnowflakes() {
  const flakeImages = ['./rose.png', './01.png', './02.png']; // Your existing images
  const flakeCount = 35; // Number of flakes
  const body = document.querySelector('body');
  const container = document.createElement('div');
  
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.height = '100%';
  container.style.pointerEvents = 'none';
  container.style.zIndex = '999999';
  container.id = 'snowContainer';
  
  body.appendChild(container);
  
  for (let i = 0; i < flakeCount; i++) {
    setTimeout(() => {
      createFlake(container, flakeImages);
    }, i * 100); // Stagger creation for more natural effect
  }
}

function createFlake(container, images) {
  const flake = document.createElement('img');
  const randomImage = images[Math.floor(Math.random() * images.length)];
  
  // Random properties for each flake
  const size = Math.random() * 30 + 10; // Between 10-40px
  const startLeft = Math.random() * 100; // Random start position
  const fallDuration = Math.random() * 10 + 10; // Between 10-20s
  const swayAmount = Math.random() * 20 - 10; // Sway left or right
  
  // Apply styles
  flake.src = randomImage;
  flake.style.position = 'absolute';
  flake.style.width = size + 'px';
  flake.style.height = 'auto';
  flake.style.left = startLeft + '%';
  flake.style.top = '-50px';
  flake.style.opacity = Math.random() * 0.5 + 0.5; // Between 0.5-1
  flake.style.zIndex = '999999';
  flake.style.pointerEvents = 'none';
  
  container.appendChild(flake);
  
  // Animate the flake falling
  flake.animate([
    { transform: `translateY(0) translateX(0)` ,opacity: flake.style.opacity },
    { transform: `translateY(${window.innerHeight + 100}px) translateX(${swayAmount}px)`,opacity:0 }
  ], {
    duration: fallDuration * 1000,
    easing: 'linear',
    iterations: 1
  }).onfinish = () => {
    flake.remove();
    createFlake(container, images); // Create a new flake to replace this one
  };
}

// Start the snow effect when the page loads
document.addEventListener('DOMContentLoaded', createSnowflakes);