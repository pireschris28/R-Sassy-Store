/* ============================================
   R SASSY STORE - MAIN JAVASCRIPT
   ============================================ */

// ============================================
// SMOOTH SCROLLING FOR NAVIGATION LINKS
// ============================================

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    
    // Only prevent default for anchor links (starting with #)
    if (href.startsWith('#')) {
      e.preventDefault();
      
      const targetId = href.substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// ============================================
// ACTIVE NAVIGATION LINK HIGHLIGHT
// ============================================

window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section, header, footer');
  const navLinks = document.querySelectorAll('nav a');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('class');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// ============================================
// SHOP NOW BUTTON FUNCTIONALITY
// ============================================

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function(e) {
    // If it's a link button, allow default behavior
    if (this.tagName === 'A') {
      return;
    }
    
    e.preventDefault();
    
    // Add a ripple effect
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    this.appendChild(ripple);
    
    // Remove ripple after animation
    setTimeout(() => {
      ripple.remove();
    }, 600);
    
    // Show alert (you can replace this with navigation later)
    console.log('Shop Now clicked!');
  });
});

// ============================================
// CARD HOVER EFFECTS
// ============================================

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.cursor = 'pointer';
  });
  
  card.addEventListener('click', function() {
    // Make cards clickable (add navigation later)
    console.log('Card clicked:', this.querySelector('h3').textContent);
  });
});

// ============================================
// PAGE LOAD ANIMATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  // Fade in cards on page load
  const cards = document.querySelectorAll('.card');
  
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      card.style.transition = 'all 0.6s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 100);
  });
  
  console.log('✨ R Sassy Store loaded successfully!');
});

// ============================================
// RESPONSIVE MENU TOGGLE (Future Mobile Menu)
// ============================================

function setupMobileMenu() {
  // This function prepares the site for a mobile hamburger menu
  // You can expand this later when you add a mobile menu button
  
  if (window.innerWidth <= 768) {
    // Mobile menu logic here
  }
}

window.addEventListener('resize', setupMobileMenu);

// ============================================
// FORM VALIDATION (For future contact form)
// ============================================

function validateForm(formElement) {
  const inputs = formElement.querySelectorAll('input, textarea');
  let isValid = true;
  
  inputs.forEach(input => {
    if (input.value.trim() === '') {
      input.style.borderColor = '#ff69b4';
      isValid = false;
    } else {
      input.style.borderColor = '#ffe4f0';
    }
  });
  
  return isValid;
}

// ============================================
// SCROLL TO TOP BUTTON (Future feature)
// ============================================

function createScrollToTopButton() {
  const button = document.createElement('button');
  button.innerHTML = '⬆️ Top';
  button.id = 'scroll-to-top';
  button.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #ff69b4;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 50px;
    cursor: pointer;
    display: none;
    font-weight: 600;
    z-index: 99;
    transition: all 0.3s ease;
  `;
  
  document.body.appendChild(button);
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  });
  
  button.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Create the scroll to top button when page loads
document.addEventListener('DOMContentLoaded', createScrollToTopButton);

// ============================================
// CART FUNCTIONALITY (Future e-commerce)
// ============================================

let cart = [];

function addToCart(productName, price) {
  const item = {
    name: productName,
    price: price,
    quantity: 1
  };
  
  // Check if item already in cart
  const existingItem = cart.find(cartItem => cartItem.name === productName);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push(item);
  }
  
  console.log('Added to cart:', item);
  console.log('Current cart:', cart);
  
  showCartNotification();
}

function removeFromCart(productName) {
  cart = cart.filter(item => item.name !== productName);
  console.log('Removed from cart:', productName);
  console.log('Current cart:', cart);
}

function showCartNotification() {
  // Show a brief notification that item was added
  const notification = document.createElement('div');
  notification.textContent = '✅ Added to cart!';
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background-color: #9370db;
    color: white;
    padding: 15px 25px;
    border-radius: 50px;
    font-weight: 600;
    z-index: 1000;
    animation: slideIn 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 2000);
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

document.addEventListener('keydown', function(event) {
  // Ctrl/Cmd + K to focus search (future feature)
  if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
    event.preventDefault();
    console.log('Search activated (future feature)');
  }
  
  // Escape key to close any modals (future feature)
  if (event.key === 'Escape') {
    console.log('Escape pressed');
  }
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Format price to currency
function formatPrice(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price);
}

// Check if device is mobile
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Log device info for debugging
console.log('Device Type:', isMobileDevice() ? 'Mobile' : 'Desktop');
console.log('Screen Width:', window.innerWidth);

// ============================================
// PERFORMANCE: Lazy Loading for Images (Future)
// ============================================

if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        // Load image logic here (future)
        observer.unobserve(img);
      }
    });
  });
}

console.log('🌸 R Sassy Store JavaScript loaded and ready!');
