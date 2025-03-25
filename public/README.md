# Android Developer Portfolio

A responsive portfolio website for an Android developer, showcasing projects, hackathons, courses, and events in a clean and modern design.

## Features

- **Fully Responsive Design**: Works seamlessly on all devices (mobile, tablet, desktop)
- **Tab-Based Portfolio Section**: Organized sections for Projects, Hackathons, Courses, and Events
- **Modern UI**: Clean, professional design with animations and transitions
- **Mobile-Friendly Navigation**: Hamburger menu for small screens
- **Contact Form**: Ready-to-use contact form (requires backend implementation for actual submission)
- **Smooth Scrolling**: Enhanced user experience with smooth page navigation

## Technologies Used

- HTML5
- CSS3 (with CSS Variables, Flexbox, and Grid)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts

## Getting Started

1. Clone or download this repository
2. Open `index.html` in your browser to view the website
3. Customize the content in the HTML file to match your personal information
4. Update the colors in the CSS file by modifying the root variables to match your personal brand
5. Add your own project images by replacing the placeholder links

## Customization Guide

### Changing Colors

Edit the color variables in the `:root` selector in `styles.css`:

```css
:root {
    --primary-color: #4CAF50; /* Main brand color */
    --secondary-color: #2E7D32; /* Secondary brand color */
    --dark-color: #1B1B1B; /* Dark sections and text */
    --light-color: #F5F5F5; /* Light backgrounds */
    --text-color: #333333; /* Regular text */
    --text-light: #777777; /* Light text for descriptions */
    --border-color: #DDDDDD; /* Border colors */
}
```

### Adding Projects

To add a new project, copy and paste this template in the projects tab section:

```html
<div class="portfolio-item">
    <img src="path-to-your-image.jpg" alt="Project Name">
    <div class="item-overlay">
        <h3>Project Name</h3>
        <p>Brief description of your project</p>
        <a href="#" class="btn">View Details</a>
    </div>
</div>
```

### Adding Hackathons, Courses, or Events

Follow the existing structure in each respective tab and modify the content to add your own experiences.

## Browser Support

The website works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For any inquiries or suggestions, please fill out the contact form on the website.

---

Feel free to fork this project and customize it for your own needs! 