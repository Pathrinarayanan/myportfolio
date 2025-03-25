# Android Developer Portfolio

A modern portfolio website showcasing Android development projects, experience, courses, conferences, and publications.

## Firebase Deployment Guide

### One-time Setup

1. Install Node.js and npm (if not already installed)
2. Install Firebase CLI globally:
   ```
   npm install -g firebase-tools
   ```
3. Log in to Firebase:
   ```
   npm run login
   ```
4. Initialize Firebase in your project:
   ```
   npm run init
   ```
   - Select "Hosting" when prompted for features
   - Select or create a Firebase project
   - Use "." as your public directory
   - Configure as a single-page app: No
   - Set up automatic builds and deploys with GitHub: No (unless you want to)

### Deploy to Firebase

Once you've set up Firebase, you can deploy your website using:

```
npm run deploy
```

### Test Locally

To preview your site locally before deploying:

```
npm run serve
```

## Customization

- Edit `index.html` to modify the website content
- Update styles in `styles.css`
- Modify functionality in `script.js`
- Update images in the `assets` folder 