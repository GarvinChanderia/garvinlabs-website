/**
 * GarvinLabs — Resource Email Gate (all /resources/<industry> docs)
 * Google Apps Script (Web App)
 *
 * DEFERRED as of 2026-07-13: the site no longer gates these PDFs behind an email form —
 * /resources now links straight to the Drive URLs below. This file is unused by the live
 * site and kept only as a reference in case the email-gate flow gets reinstated later.
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
 * The 5 industry docs link straight to Garvin's Google Drive shareable links (set below).
 * To add a new industry doc: upload the PDF to Drive, get a shareable "Anyone with the link"
 * URL, and add one entry to RESOURCE_MAP below.
 */

const SHEET_ID = "REPLACE_WITH_YOUR_GOOGLE_SHEET_ID";
const GARVIN_EMAIL = "chanderia.10.garvin@gmail.com";

const RESOURCE_MAP = {
  "resources-beauty-cosmetics": {
    docName: "Beauty & Cosmetics: 7 Automations Guide",
    pdfUrl: "https://drive.google.com/file/d/1NNYqQo5UQmMpyMwXpzMAOYRQ1MQetTaT/view?usp=sharing",
    blurb:
      "seven automations ranked by ROI for beauty and skincare brands: cart recovery, back-in-stock alerts, review and UGC collection, and support",
  },
  "resources-fashion-apparel": {
    docName: "Fashion & Apparel: 7 Automations Guide",
    pdfUrl: "https://drive.google.com/file/d/1bIRD66tywF0-U-KvNuRlC6RjtsPPsJnD/view?usp=sharing",
    blurb:
      "seven automations ranked by ROI for fashion and apparel brands: cart recovery, size exchanges, back-in-stock alerts, and review collection",
  },
  "resources-food-beverage": {
    docName: "Food & Beverage: 7 Automations Guide",
    pdfUrl: "https://drive.google.com/file/d/1o8LDo6UvBseuQKOg0YHlgeg7vxYI9yGd/view?usp=sharing",
    blurb:
      "seven automations ranked by ROI for food and beverage brands: cart recovery, subscription renewals, shipping updates, and taste surveys",
  },
  "resources-health-nutrition-wellness": {
    docName: "Health, Nutrition & Wellness: 7 Automations Guide",
    pdfUrl: "https://drive.google.com/file/d/1NGAnOHcKDTkHITlMQVbMqh5KH2pgjcmN/view?usp=sharing",
    blurb:
      "seven automations ranked by ROI for health and wellness brands: cart recovery, subscription renewals, review collection, and support Q&A",
  },
  "resources-home-furniture-decor": {
    docName: "Home, Furniture & Decor: 7 Automations Guide",
    pdfUrl: "https://drive.google.com/file/d/1HNJqzomrie4dgXlNHMmFFLWQtFaGgWT9/view?usp=sharing",
    blurb:
      "seven automations ranked by ROI for home and furniture brands: cart recovery, delivery scheduling, post-purchase care, and returns",
  },
};

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const name = data.name || "Unknown";
    const email = data.email || "";
    const source = data.source || "";
    const submittedAt = data.submittedAt || new Date().toISOString();

    const resource = RESOURCE_MAP[source];
    if (!resource) {
      throw new Error(`Unknown resource source: "${source}"`);
    }

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
