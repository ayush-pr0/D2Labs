const base64Img = require("base64-img");
const fs = require("fs");
const mailHeader = require("./mailHeader");
const { findData } = require("./pdfData");

function htmlInit(data, lab) {
    const originalImg = base64Img.base64Sync(
        `./public/upload/${data.fName}.${data.fType}`
    );
    const heatmapImg = base64Img.base64Sync(
        `./public/result/${lab}/result_${data.fName}.${data.fType}`
    );
    const fileName = `./public/html/${data.fName}.html`;
    const stream = fs.createWriteStream(fileName);
    const pdfData = findData(lab, data.result);

    function buildHtml(req) {
        const header =
            '<meta charset="UTF-8"> <title>Disease Detection Labs - Medical Report</title> <style> /* Add some basic styles */ body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #ffffff; } h1, h2, h3 { margin: 0; } h1 { font-size: 36px; font-weight: bold; color: #1c7dd6; text-align: center; } h2 { font-size: 24px; font-weight: bold; color: #1c7dd6; } h3 { font-size: 18px; font-weight: bold; color: #1c7dd6; } p { margin: 0; padding: 0; font-size: 16px; line-height: 1.5; color: #333; } img { max-width: 100%; height: auto; } .container { width: 800px; margin: 0 auto; } .logo { float: left; width: 130px; } .header { clear: both; padding: 20px 0; } .section { margin-bottom: 40px; page-break-inside: avoid; } .section:last-child { margin-bottom: 0; } .section-header { margin-bottom: 10px; } .section-body { margin: 0; padding: 20px; background-color: #f5f5f5; border: 1px solid #ccc; } .section-body p:first-child { margin-top: 0; } .x-ray { display: flex; justify-content: space-between; margin-bottom: 20px; } .x-ray img { width: 48%; margin-right: 2%; } table { width: 100%; border-collapse: collapse; margin-bottom: 20px; } th, td { padding: 8px; text-align: left; border-bottom: 1px solid #ddd; } th { font-weight: bold; } </style>';

        const body =
            mailHeader +
            `</div> <h1 style="margin-right: 70px;">Test Report</h1> </div> <br> <div class="section"> <h2 class="section-header">Doctor Information</h2> <div class="section-body"> <table> <tr> <th>Doctor Name:</th> <td>${data.doctor_name}</td> </tr> <tr> <th>Phone:</th> <td>${data.doctor_phone}</td> </tr> <tr> <th>Email:</th> <td>${data.doctor_email}</td> </tr> <tr> <th>Address:</th> <td>${data.doctor_address}</td> </tr> </table> </div> </div> <div class="section"> <h2 class="section-header">Patient Information</h2> <div class="section-body"> <table> <tr> <th>Patient Name:</th> <td>${data.patient_name}</td> </tr> <tr> <th>Date of Birth:</th> <td>${data.patient_dob}</td> </tr> <tr> <th>Gender:</th> <td>${data.gender}</td> </tr> <tr> <th>Phone:</th> <td>${data.patient_phone}</td> </tr> <tr> <th>Email:</th> <td>${data.patient_email}</td> </tr> </table> </div> </div> <div class="section"> <h2 class="section-header">Radiology Report</h2> <div class="section-body"> <h3>${data.imageType}</h3> <br> <div class="x-ray"> ` +
            `<img src="${originalImg}" style="width:45%;" alt="X-Ray 1"> ` +
            `<img src="${heatmapImg}" style="width:45%;" alt="X-Ray 2"> </div> </div> </div> ` +
            `<div class="section"> <h2 class="section-header">Laboratory Result</h2> <div class="section-body"> <p><strong>Chief Complaint : </strong> ${pdfData.chiefComplaint}</p> <p><strong>Result : </strong> ${pdfData.result}</p> </div> </div> <div class="section"> <h2 class="section-header">Symptoms</h2> <div class="section-body"> <p>${pdfData.symptoms}</p> </div> </div> <div class="section"> <h2 class="section-header">Causes</h2> <div class="section-body"> <p>${pdfData.causes}</p> </div> </div>
            <div class="section"> <h2 class="section-header">Treatment</h2> <div class="section-body"> <p>${pdfData.treatment}</p> </div> </div> <div class="section"> <h2 class="section-header">Follow-up</h2> <div class="section-body"> <p>${pdfData.followUp}</p> </div> </div> </div>`;

        return (
            "<!DOCTYPE html>" +
            "<html><head>" +
            header +
            "</head><body>" +
            body +
            "</body></html>"
        );
    }

    stream.once("open", function (fd) {
        var html = buildHtml();
        stream.end(html);
    });
}

module.exports = { htmlInit };
