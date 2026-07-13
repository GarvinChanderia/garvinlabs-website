/**
 * GarvinLabs — Resource Email Gate (report + all /resources/<industry> docs)
 * Google Apps Script (Web App)
 *
 * SETUP:
 * 1. Open https://script.google.com → open the existing GarvinLabs project (or New project)
 * 2. Paste this file over Code.gs
 * 3. In the spreadsheet: File > Share > copy the Sheet ID from the URL
 * 4. Replace SHEET_ID below with your Google Sheet ID
 * 5. Deploy: Deploy > Manage deployments > edit the existing web app deployment > New version
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. The deployment URL stays the same as before (NEXT_PUBLIC_REPORT_ENDPOINT in Vercel env
 *    vars does not need to change) — this replaces the single-resource logic with a lookup
 *    keyed on the `source` field every gate page already sends.
 *
 * PDF DELIVERY:
 * Every PDF is hosted directly on the site under /public/pdfs/ and served at
 * https://garvinlabs.com/pdfs/<file>.pdf — no Google Drive step needed. Add a new industry
 * doc by dropping the PDF in that folder and adding one entry to RESOURCE_MAP below.
 */

const SHEET_ID = "REPLACE_WITH_YOUR_GOOGLE_SHEET_ID";
const GARVIN_EMAIL = "chanderia.10.garvin@gmail.com";
const SITE_URL = "https://garvinlabs.com";

const RESOURCE_MAP = {
  "report-page": {
    docName: "AI Support Business Case",
    pdfUrl: `${SITE_URL}/pdfs/ai-support-business-case.pdf`,
    blurb:
      "why support costs are higher than they appear, how automated triage handles it, and what implementation actually looks like, formatted so your team can present it in any leadership meeting",
  },
  "resources-beauty-cosmetics": {
    docName: "Beauty & Cosmetics: 7 Automations Guide",
    pdfUrl: `${SITE_URL}/pdfs/beauty-cosmetics.pdf`,
    blurb:
      "seven automations ranked by ROI for beauty and skincare brands: cart recovery, back-in-stock alerts, review and UGC collection, and support",
  },
  "resources-fashion-apparel": {
    docName: "Fashion & Apparel: 7 Automations Guide",
    pdfUrl: `${SITE_URL}/pdfs/fashion-apparel.pdf`,
    blurb:
      "seven automations ranked by ROI for fashion and apparel brands: cart recovery, size exchanges, back-in-stock alerts, and review collection",
  },
  "resources-food-beverage": {
    docName: "Food & Beverage: 7 Automations Guide",
    pdfUrl: `${SITE_URL}/pdfs/food-beverage.pdf`,
    blurb:
      "seven automations ranked by ROI for food and beverage brands: cart recovery, subscription renewals, shipping updates, and taste surveys",
  },
  "resources-health-nutrition-wellness": {
    docName: "Health, Nutrition & Wellness: 7 Automations Guide",
    pdfUrl: `${SITE_URL}/pdfs/health-nutrition-wellness.pdf`,
    blurb:
      "seven automations ranked by ROI for health and wellness brands: cart recovery, subscription renewals, review collection, and support Q&A",
  },
  "resources-home-furniture-decor": {
    docName: "Home, Furniture & Decor: 7 Automations Guide",
    pdfUrl: `${SITE_URL}/pdfs/home-furniture-decor.pdf`,
    blurb:
      "seven automations ranked by ROI for home and furniture brands: cart recovery, delivery scheduling, post-purchase care, and returns",
  },
};

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const name = data.name || "Unknown";
    const email = data.email || "";
    const source = data.source || "report-page";
    const submittedAt = data.submittedAt || new Date().toISOString();

    const resource = RESOURCE_MAP[source] || RESOURCE_MAP["report-page"];

    // Log to sheet
    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheetByName("PDF Leads") || ss.insertSheet("PDF Leads");

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Submitted At", "Name", "Email", "Source", "User Agent", "Referrer"]);
    }

    sheet.appendRow([submittedAt, name, email, source, data.userAgent || "", data.referrer || ""]);

    // Email to requester
    const bodyHtml = `<p>Hi ${name},</p>
<p>Here's the ${resource.docName}: <a href="${resource.pdfUrl}">Download PDF</a></p>
<p>It covers ${resource.blurb}.</p>
<p>If you want to see how this maps to your setup specifically, reply to this email, happy to talk through it.</p>
<p>— Garvin<br>GarvinLabs</p>`;

    GmailApp.sendEmail(email, `Your ${resource.docName} (GarvinLabs)`, "", {
      htmlBody: bodyHtml,
      name: "Garvin from GarvinLabs",
    });

    // Notify Garvin
    GmailApp.sendEmail(
      GARVIN_EMAIL,
      `New PDF lead: ${name} <${email}> — ${resource.docName}`,
      `Name: ${name}\nEmail: ${email}\nSource: ${source}\nDoc: ${resource.docName}\nTime: ${submittedAt}`
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
