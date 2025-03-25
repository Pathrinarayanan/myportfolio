# Contact Form Setup Guide

This guide will help you set up the contact form on your portfolio website to send real emails using EmailJS. EmailJS allows you to send emails directly from client-side JavaScript without needing a backend server.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. The free tier allows you to send up to 200 emails per month

## Step 2: Connect an Email Service

1. After signing up, go to the "Email Services" section in your EmailJS dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps to connect your email account

## Step 3: Create an Email Template

1. Go to the "Email Templates" section in your dashboard
2. Click "Create New Template"
3. Design your email template using the variables defined in your JavaScript:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message

Here's a simple template example:

```
Subject: {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}
```

4. Save your template and note the Template ID

## Step 4: Update Your JavaScript

Open `script.js` and update these placeholders with your actual values:

1. Replace `YOUR_PUBLIC_KEY` with your EmailJS public key (found in Account > API Keys)
2. Replace `YOUR_SERVICE_ID` with your Email Service ID (found in Email Services)
3. Replace `YOUR_TEMPLATE_ID` with your Email Template ID (found in Email Templates)

```javascript
// Initialize EmailJS
(function() {
    // Replace with your actual EmailJS public key
    emailjs.init("YOUR_PUBLIC_KEY");
})();

// ...

// Send email using EmailJS
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

## Step 5: Test Your Contact Form

1. Fill out your contact form and submit it
2. Check that you receive the email at your connected email account
3. Verify that the submit button shows the loading state and returns to normal after sending

## Troubleshooting

- If emails aren't sending, check the browser console for error messages
- Verify your EmailJS service is properly connected
- Make sure you're using the correct service ID, template ID, and public key
- Check if you've reached your monthly email limit (200 for free accounts)

## Additional Customization

- You can modify the email template in the EmailJS dashboard to change the email format
- Add additional fields to the form by updating both the HTML and the templateParams object
- Implement custom success/error messages instead of using browser alerts 