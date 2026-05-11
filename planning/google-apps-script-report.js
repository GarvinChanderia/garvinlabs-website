/**
 * GarvinLabs — /report Email Gate
 * Google Apps Script (Web App)
 *
 * SETUP:
 * 1. Open https://script.google.com → New project
 * 2. Paste this file as Code.gs
 * 3. In the spreadsheet: File > Share > copy the Sheet ID from the URL
 * 4. Replace SHEET_ID below with your Google Sheet ID
 * 5. Deploy: Deploy > New deployment > Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Copy the deployment URL → set NEXT_PUBLIC_REPORT_ENDPOINT in Vercel env vars
 *
 * PDF DELIVERY:
 * When the PDF is ready, upload it to Google Drive, get a shareable link,
 * and replace PDF_DRIVE_LINK below with the direct URL.
 */

const SHEET_ID = "REPLACE_WITH_YOUR_GOOGLE_SHEET_ID";
const GARVIN_EMAIL = "chanderia.10.garvin@gmail.com";
const PDF_DRIVE_LINK = ""; // Set when PDF is ready — leave blank for now

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const name = data.name || "Unknown";
    const email = data.email || "";
    const source = data.source || "report-page";
    const submittedAt = data.submittedAt || new Date().toISOString();

    // Log to sheet
    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheetByName("PDF Leads") || ss.insertSheet("PDF Leads");

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Submitted At", "Name", "Email", "Source", "User Agent", "Referrer"]);
    }

    sheet.appendRow([submittedAt, name, email, source, data.userAgent || "", data.referrer || ""]);

    // Email to requester
    const hasLink = PDF_DRIVE_LINK && PDF_DRIVE_LINK.length > 0;

    const bodyHtml = hasLink
      ? `<p>Hi ${name},</p>
<p>Here's the AI Customer Support Business Case: <a href="${PDF_DRIVE_LINK}">Download PDF</a></p>
<p>It covers why support costs are higher than they appear, how AI handles it, and what implementation actually looks like — formatted so your team can present it in any leadership meeting.</p>
<p>If you want to see how this works for your brand specifically, book a 30-min call: <a href="https://calendly.com/labs-garvin/30min">calendly.com/labs-garvin/30min</a></p>
<p>— Garvin<br>GarvinLabs</p>`
      : `<p>Hi ${name},</p>
<p>Thanks for grabbing the AI Customer Support Business Case — I'll send it over to you personally within a few hours.</p>
<p>— Garvin<br>GarvinLabs</p>`;

    GmailApp.sendEmail(email, "Your AI Support Business Case (GarvinLabs)", "", {
      htmlBody: bodyHtml,
      name: "Garvin from GarvinLabs",
    });

    // Notify Garvin
    GmailApp.sendEmail(
      GARVIN_EMAIL,
      `New PDF lead: ${name} <${email}>`,
      `Name: ${name}\nEmail: ${email}\nSource: ${source}\nTime: ${submittedAt}`
    );

    return ContentService.createTextOutput(JSON.stringify({ success: true })).setMimeType(
      ContentService.MimeType.JSON
    );
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ error: err.message })).setMimeType(
      ContentService.MimeType.JSON
    );
  }
}
