# 🌸 R Sassy Store - E-Commerce Website

A beautiful, fully functional handmade products e-commerce website built with HTML, CSS, and JavaScript.

## 🎯 Features

### ✨ Complete Website
- **Homepage** - Eye-catching hero section with category showcase
- **4 Product Pages** - Dining Tables, Crochet, Clay Miniatures, Art Supplies
- **Contact Page** - Contact form with validation and newsletter signup
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop

### 🛒 E-Commerce Features
- Add to cart functionality
- Product cards with images, descriptions, and prices
- Shopping cart notifications
- Smooth scrolling navigation
- Newsletter signup form
- Contact form with email validation

### 🎨 Design Features
- Beautiful gradient backgrounds
- Smooth animations and hover effects
- Modern, clean UI with professional styling
- Color scheme: Hot Pink, Purple, Orange
- Font: Poppins (body) & Pacifico (logo)

### 📱 Technical Features
- Fully responsive layout
- Smooth page transitions
- Form validation
- Keyboard shortcuts support
- Mobile device detection
- Cross-browser compatible

## 📁 File Structure

```
R-Sassy-Store/
├── index.html                 # Homepage
├── dining-tables.html         # Dining Tables product page
├── crochet.html              # Crochet product page
├── clay-miniatures.html      # Clay Miniatures product page
├── art-supplies.html         # Art Supplies product page
├── contact.html              # Contact & Newsletter page
├── style.css                 # Main stylesheet (responsive)
├── script.js                 # JavaScript functionality
└── README.md                 # This file
```

## 🚀 Quick Start

1. **Clone or Download** this repository
2. **Open `index.html`** in your web browser
3. **Start exploring** the website!

No installation or setup required - it's ready to use!

## 🛍️ Product Categories

### 🪑 Dining Tables
- Rustic Oak Dining Table - $899.99
- Modern Walnut Table - $749.99
- Farmhouse Extendable Table - $1,299.99
- Minimalist Maple Table - $599.99
- Industrial Metal Frame Table - $649.99
- Round Pedestal Table - $849.99

### 🧶 Crochet
- Chunky Knit Blanket - $79.99
- Baby Amigurumi Set - $49.99
- Lavender Dream Shawl - $89.99
- Market Tote Bag - $39.99
- Sunset Wrap Cardigan - $119.99
- Decorative Doily Set - $34.99

### 🏺 Clay Miniatures
- Mushroom Garden Set - $24.99
- Tiny Succulent Planters - $39.99
- Animal Character Figurines - $44.99
- Cottage House Miniatures - $54.99
- Ocean Life Collection - $29.99
- Flower Fairy Figurines - $49.99

### 🎨 Art Supplies
- Watercolor Paint Set - $44.99
- Acrylic Paint Bundle - $34.99
- Artist Brush Set - $39.99
- Colored Pencil Collection - $54.99
- Sketchbook Bundle - $29.99
- Mixed Media Starter Kit - $89.99

## 💻 Interactive Features

### Navigation
- Smooth scrolling to sections
- Active link highlighting
- Mobile-friendly menu
- Quick links to all categories

### Shopping
- Click "Add to Cart" on any product
- Real-time cart notifications
- Price display in USD
- Product specifications shown

### Contact
- **Contact Form** with validation
  - Name, Email, Phone
  - Subject selection
  - Message textarea
  - Form validation

- **Newsletter Signup**
  - Email subscription
  - Confirmation message
  - Quick and easy

- **Contact Information**
  - Email: hello@sassystore.com
  - Phone: (123) 456-7890
  - Address: 123 Creative Lane, Artisan City, CA 90210
  - Hours: Mon-Fri 9am-5pm, Sat 10am-3pm
  - Social media links

## 🎨 Customization

### Change Colors
Edit the `:root` section in `style.css`:
```css
--primary-color: #ff69b4;      /* Hot Pink */
--secondary-color: #9370db;    /* Purple */
--accent-color: #ffa500;       /* Orange */
```

### Add Products
Edit any product page HTML and duplicate a `.product-card` div:
```html
<div class="product-card">
  <div class="product-image" style="background: ..."></div>
  <h3>Product Name</h3>
  <p class="product-description">Description</p>
  <p class="product-specs"><strong>Specs:</strong> Details</p>
  <p class="product-price">$99.99</p>
  <button class="btn-add-cart" onclick="addToCart('Product Name', 99.99)">Add to Cart</button>
</div>
```

### Modify Contact Info
Edit the `.contact-info` section in `contact.html` with your details.

## 🚀 Next Steps (Future Enhancements)

1. **Backend Integration**
   - Connect to payment gateway (Stripe, PayPal)
   - Set up order database
   - User accounts and login

2. **Deploy Live**
   - GitHub Pages (Free static hosting)
   - Vercel, Netlify, or similar
   - Custom domain setup

3. **Add Features**
   - Real product images
   - Product filtering/search
   - Customer reviews
   - Wishlist functionality

4. **SEO & Marketing**
   - Meta descriptions
   - Keywords optimization
   - Google Analytics
   - Social media integration

## 📞 Support

For questions or custom features, contact us at:
- **Email**: hello@sassystore.com
- **Phone**: (123) 456-7890

## 📄 License

Created with ❤️ for R Sassy Store

---

**Happy shopping! 🛍️🌸**
