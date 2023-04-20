const puppeteer = require("puppeteer");
const fs = require("fs");
const nodemailer = require("nodemailer");

async function pdfInit(data, lab) {
    // Create a browser instance
    const browser = await puppeteer.launch();
    // Create a new page
    const page = await browser.newPage();

    //Get HTML content from HTML file
    const html = fs.readFileSync(`./public/html/${data.fName}.html`, "utf-8");
    await page.setContent(html, { waitUntil: "domcontentloaded" });

    // To reflect CSS used for screens instead of print
    await page.emulateMediaType("screen");

    // Downlaod the PDF
    const pdf = await page.pdf({
        path: `./public/pdf/${data.fName}.pdf`,
        margin: {
            top: "50px",
            right: "50px",
            bottom: "100px",
            left: "50px",
        },
        printBackground: true,
        format: "A4",
    });

    // Close the browser instance
    await browser.close();
    (function deleteFiles() {
        const filesToDelete = [
            `./public/upload/${data.fName}.${data.fType}`,
            `./public/result/${lab}/result_${data.fName}.${data.fType}`,
            `./public/html/${data.fName}.html`,
        ];
        filesToDelete.forEach((file) => {
            fs.unlink(file, (err) => {
                if (err) throw err;
                console.log(`${file} was deleted`);
            });
        });
    })();
    //*********************************___________________NODEMAILER__________****************************************//

    // create a transporter object
    const transporter = await nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "diseasedetectionlabs@gmail.com",
            pass: "gcsxyocxnunahynv",
        },
    });

    // setup email data with unicode symbols
    const mailOptions = {
        from: {
            name: "Download your Diagnostic Report",
            address: "diseasedetectionlabs@gmail.com",
        }, // sender address
        to: data.patient_email, // list of receivers
        subject: "Your Report is Generated", // Subject line
        Text: "Your Diagnostic Report", // Subject line
        html: `<!DOCTYPE html> <html> <head> <meta charset="utf-8"> <title>D2 Labs Medical Report</title> <style> body { font-family: Arial, sans-serif; margin: 0; padding: 0; } header { background-color: #2124b1; color: #fff; padding: 20px; } header img { height: 80px; } h1 { font-size: 24px; margin: 20px 0; } .container { margin: 20px; } button { background-color: #2124b1; color: #fff; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; cursor: pointer; } button:hover { background-color: #005ea2; } </style> </head> <body> <header> <img src="https://i.ibb.co/Zzj4f0f/logo2.png" alt="D2 Labs Logo"> </header> <div class="container"> <h1>Report Generated - Please Download Your Report Here</h1> <p>Dear Patient,</p> <p>I hope this email finds you well. We would like to inform you that your medical test results are now available and we have attached a copy of the report to this email.</p> <p>Please take some time to review the report, and if you have any questions or concerns about the results, please do not hesitate to contact us.</p> <p>Thank you for choosing D2 Labs for your healthcare needs. We look forward to serving you.</p> <p>Best regards,<br> The D2 Labs Team</p> </div> </body> </html>`, // HTML body
        attachments: [
            {
                // utf-8 string as an attachment
                filename: `${data.patient_name}_report.pdf`,
                path: `public//pdf//${data.fName}.pdf`,
            },
        ],
        priority: "high",
    };

    // send mail with defined transport object
    await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });

    //*********************************___________________NODEMAILER__END__________________****************************************//
}
//**************************************PDF_end*************************************///////////

module.exports = { pdfInit };
