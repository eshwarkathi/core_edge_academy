# Google Sheets Setup Guide - Separate Sheets by Form Type

## Step 1: Get Your Spreadsheet ID

1. Open your Google Sheet in browser
2. Look at the URL: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID_HERE/edit`
3. Copy the `SPREADSHEET_ID_HERE` part (long alphanumeric string)

Example: `1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p`

## Step 2: Update Google Apps Script

1. Go to [script.google.com](https://script.google.com)
2. Click on your existing project (the one deployed as web app)
3. Delete all existing code
4. Copy the code from `GOOGLE_APPS_SCRIPT.gs` in this project
5. In the script, find this line:
   ```javascript
   const SPREADSHEET_ID = "YOUR_SPREADSHEET_ID_HERE";
   ```
6. Replace `YOUR_SPREADSHEET_ID_HERE` with your actual Spreadsheet ID

## Step 3: Deploy the Updated Script

1. Click **Deploy** button (top right)
2. Click **New deployment**
3. Select deployment type: **Web app**
4. In "Execute as": Select your Google account email
5. In "Who has access": Select **Anyone** (required for form submissions)
6. Click **Deploy**
7. Copy the new deployment URL (it will look like):
   ```
   https://script.google.com/macros/s/AKfycbxQXswSmYMupP6P4V4luN6l_Uxz1si-QI1VbGdWtwkn12nRhWUkKQWMruUrUdzG5XZZ/exec
   ```

## Step 4: Update React App (if URL changed)

If you got a NEW deployment URL in Step 3, update all three files:

**src/components/Contact.jsx**
```javascript
const GOOGLE_SCRIPT_URL = "YOUR_NEW_URL_HERE";
```

**src/components/DemoModal.jsx**
```javascript
const GOOGLE_SCRIPT_URL = "YOUR_NEW_URL_HERE";
```

**src/pages/Enroll.jsx**
```javascript
const GOOGLE_SCRIPT_URL = "YOUR_NEW_URL_HERE";
```

**src/App.jsx**
```javascript
const GOOGLE_SCRIPT_URL = "YOUR_NEW_URL_HERE";
```

## Step 5: What Happens Automatically

The script will create **4 separate sheets** in your Google Sheet:

### 1. **Contact Us Submissions**
- Timestamp
- Full Name
- Email
- Phone
- Course Selected
- Message
- User Agent

### 2. **Demo Bookings**
- Timestamp
- Full Name
- Email
- Phone
- Course Selected
- User Agent

### 3. **Enrollments**
- Timestamp
- Full Name
- Email
- Phone
- Course Selected
- Mode (if provided)
- Description (if provided)
- User Agent

### 4. **Website Visits**
- Timestamp
- Full Name
- Email
- Page URL
- Page Title
- Referrer
- User Agent

## Features

✅ Automatic sheet creation (sheets created when first submission arrives)
✅ Professional header formatting (blue background, white text)
✅ Auto-resizing columns
✅ Timestamp in IST (India Standard Time)
✅ Fallback for unknown form types
✅ Error handling

## Troubleshooting

**If data is not appearing:**
1. Check that `SPREADSHEET_ID` is correct
2. Verify deployment has "Anyone" access
3. Check browser console for errors
4. Verify form is submitting (check Network tab in DevTools)

**If columns are wrong:**
- Delete the auto-created sheet and re-submit (it will recreate with correct headers)

**If timestamps are wrong timezone:**
- Edit line in script: `'en-IN', { timeZone: 'Asia/Kolkata' }`
- Change `'Asia/Kolkata'` to your timezone (e.g., 'America/New_York')

## Timezone Options
- `'Asia/Kolkata'` - India (IST)
- `'America/New_York'` - US Eastern
- `'Europe/London'` - UK
- `'Asia/Tokyo'` - Japan
- `'Australia/Sydney'` - Australia
