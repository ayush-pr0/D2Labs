const { spawn } = require("child_process");
const { htmlInit } = require("./htmlGen");
const { pdfInit } = require("./pdfGen");

function main(req, res, imageType, lab) {
    const data = req.body;
    data.fName = req.file.filename.slice(0, -4);
    data.fType = req.file.filename.slice(-3);
    data.imageType = imageType;

    const python = spawn("python", [
        `script\\${lab}.py`,
        `public\\upload\\${data.fName}.${data.fType}`,
    ]);

    python.stdout.on("data", function (stdData) {
        // console.log("Working");
        data.result = stdData.toString().trim();
    });

    // in close event we are sure that stream from child process is closed
    python.on("close", (code) => {
        // send data to browser
        console.log(data);
        htmlInit(data, lab); // HTML Builder
        pdfInit(data, lab); // Pdf builder and mail sender
        return res.render("report", {
            doctor_name: data.doctor_name,
            doctor_email: data.doctor_email,
            doctor_phone: data.doctor_phone,
            doctor_address: data.doctor_address,
            patient_name: data.patient_name,
            patient_dob: data.patient_dob,
            patient_email: data.patient_email,
            patient_phone: data.patient_phone,
            patient_address: data.patient_address,
            gender: data.gender,
            imageType,
            result: data.result,
            path: `upload\\${data.fName}.${data.fType}`,
            result_path: `result\\${lab}\\result_${data.fName}.${data.fType}`,
        });
    });
}
module.exports = { main };
