// Google Apps Script - Core Edge Academy Form Handler
// This script creates separate sheets for different form types and logs submissions

const SPREADSHEET_ID = "YOUR_SPREADSHEET_ID_HERE"; // Replace with your actual Spreadsheet ID

// Define sheet names for each form type
const SHEET_NAMES = {
  "Contact Us": "Contact Us Submissions",
  "Book Free Demo": "Demo Bookings",
  "Enroll Now": "Enrollments",
  "Website Visit": "Website Visits"
};

// Define headers for each sheet type
const SHEET_HEADERS = {
  "Contact Us": ["Timestamp", "Full Name", "Email", "Phone", "Course", "Message", "User Agent"],
  "Book Free Demo": ["Timestamp", "Full Name", "Email", "Phone", "Course", "User Agent"],
  "Enroll Now": ["Timestamp", "Full Name", "Email", "Phone", "Course", "Mode", "Description", "User Agent"],
  "Website Visit": ["Timestamp", "Full Name", "Email", "Page URL", "Page Title", "Referrer", "User Agent"]
};

function doPost(e) {
  try {
    const params = e.parameter;
    const formType = params.formType || "Unknown";
    
    // Get or create appropriate sheet
    const sheetName = SHEET_NAMES[formType] || "Other Submissions";
    const sheet = getOrCreateSheet(sheetName);
    
    // Prepare data based on form type
    let rowData = [];
    
    if (formType === "Contact Us") {
      rowData = [
        new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        params.fullName || params.name || "",
        params.email || params.emailId || "",
        params.phone || "",
        params.course || "",
        params.message || "",
        params.userAgent || ""
      ];
    } else if (formType === "Book Free Demo") {
      rowData = [
        new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        params.fullName || params.name || "",
        params.email || params.emailId || "",
        params.phone || "",
        params.course || "",
        params.userAgent || ""
      ];
    } else if (formType === "Enroll Now") {
      rowData = [
        new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        params.fullName || params.name || "",
        params.email || params.emailId || "",
        params.phone || "",
        params.course || "",
        params.mode || "",
        params.description || "",
        params.userAgent || ""
      ];
    } else if (formType === "Website Visit") {
      rowData = [
        new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        params.fullName || params.name || "",
        params.email || params.emailId || "",
        params.page || params.pagePath || "",
        params.pageTitle || "",
        params.referrer || "",
        params.userAgent || ""
      ];
    } else {
      // Fallback for unknown form types
      rowData = [
        new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        params.fullName || params.name || "",
        params.email || params.emailId || "",
        formType
      ];
    }
    
    // Append row to sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({ success: true, message: "Data recorded successfully" })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log("Error: " + error.toString());
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateSheet(sheetName) {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = spreadsheet.getSheetByName(sheetName);
  
  if (!sheet) {
    // Create new sheet
    sheet = spreadsheet.insertSheet(sheetName);
    
    // Add headers based on sheet name
    const headers = getHeaders(sheetName);
    if (headers && headers.length > 0) {
      sheet.appendRow(headers);
      
      // Format header row
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground("#4472C4");
      headerRange.setFontColor("#FFFFFF");
      headerRange.setFontWeight("bold");
      
      // Auto-resize columns
      for (let i = 1; i <= headers.length; i++) {
        sheet.autoResizeColumn(i);
      }
    }
  }
  
  return sheet;
}

function getHeaders(sheetName) {
  // Map sheet names to their headers
  if (sheetName === "Contact Us Submissions") {
    return SHEET_HEADERS["Contact Us"];
  } else if (sheetName === "Demo Bookings") {
    return SHEET_HEADERS["Book Free Demo"];
  } else if (sheetName === "Enrollments") {
    return SHEET_HEADERS["Enroll Now"];
  } else if (sheetName === "Website Visits") {
    return SHEET_HEADERS["Website Visit"];
  }
  return [];
}

// Deploy as web app (required)
// 1. Click "Deploy" > "New Deployment"
// 2. Select type: "Web app"
// 3. Execute as: Your account email
// 4. Who has access: "Anyone" (for form submissions)
// 5. Copy the deployment URL and update it in your React app
