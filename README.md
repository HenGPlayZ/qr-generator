# 🚀 QR Generator

A modern, responsive QR Code generator with premium design and clean URLs.

## ✨ Features

- **🎨 Modern Design**: Premium glass morphism UI with green gradient theme
- **📱 Responsive**: Works perfectly on desktop, tablet, and mobile
- **🔧 Dual Mode**: Generate QR codes for text and WiFi networks
- **📋 Copy to Clipboard**: One-click copy functionality
- **🌐 Clean URLs**: Beautiful URLs without .html extensions
- **⚡ Fast**: Client-side generation with QRCode.js
- **🔒 Privacy**: No data sent to external servers

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js + Express (for development)
- **QR Library**: QRCode.js
- **Deployment**: Vercel-ready configuration

## 📁 Project Structure

```
qr-generator/
├── public/
│   ├── css/
│   │   ├── index.css          # Landing page styles
│   │   └── qr-generator.css   # Main app styles
│   ├── js/
│   │   ├── qr-generator.js    # Main app logic
│   │   └── FileSaver.js       # File download utility
│   └── assets/
│       └── images/            # Logo and favicon files
├── home/                      # Legacy folder (for compatibility)
├── index.html                 # Landing page
├── qr-generator.html          # Main QR generator app
├── server.js                  # Express development server
├── vercel.json               # Vercel deployment config
└── package.json              # Node.js dependencies
```

## 🚀 Quick Start

### Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/HenGPlayZ/qr-generator.git
   cd qr-generator
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm start
   ```

4. **Open in browser**
   - Landing page: `http://localhost:3000`
   - QR Generator: `http://localhost:3000/qr-generator`

### Deployment

#### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically with zero configuration

#### Other Platforms

- Upload files to any static hosting service
- For clean URLs, ensure server supports URL rewriting

## 🌐 Usage

### Text QR Codes

1. Visit `/qr-generator`
2. Select "TEXT" tab
3. Enter your text
4. Click "GENERATE"

### WiFi QR Codes

1. Visit `/qr-generator`
2. Select "WIFI" tab
3. Fill in network details:
   - Network Name (SSID)
   - Password
   - Security Type
   - Hidden Network (optional)
4. Click "GENERATE"

## 🎨 Design Features

- **Glass Morphism**: Modern frosted glass effect
- **Green Gradient**: Professional green color scheme
- **Responsive Breakpoints**: Mobile-first design
- **Smooth Animations**: CSS transitions and transforms
- **Toast Notifications**: User feedback for actions
- **Copy to Clipboard**: Built-in clipboard integration

## 🔧 Development

### Adding New Features

1. Update `public/js/qr-generator.js` for functionality
2. Update `public/css/qr-generator.css` for styling
3. Test locally with `npm start`

### Customization

- **Colors**: Modify CSS custom properties in the stylesheets
- **Fonts**: Update font imports and font-family declarations
- **Layout**: Adjust responsive breakpoints and grid layouts

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 👨‍💻 Author

**Draxler** - [@HenGPlayZ](https://github.com/HenGPlayZ)

---

⭐ Star this repository if you found it helpful!

A simple and elegant web application that generates QR codes from any text or URL input. Users can download the generated QR codes in multiple formats (JPG, PNG, SVG).

## Features

- Generate QR codes instantly
- Multiple download formats (JPG, PNG, SVG)
- Mobile-friendly with vibration feedback
- Clean and responsive interface
- Error handling for ad blockers

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A code editor (VS Code, Sublime Text, etc.)
- Internet connection (required for QR code generation API)

### Setup Instructions

1. Clone or download this repository
2. Open the project folder in your preferred code editor
3. Open `index.html` in your web browser
4. Start generating QR codes!

### Development

To modify or enhance the project:

1. Edit `styles.css` to customize the appearance
2. Modify `script.js` to change functionality
3. Update `index.html` to alter the structure

## Contributing

Feel free to fork this project and submit pull requests with improvements!
