const covid19_pneumonia = {
    "COVID-19": {
        chiefComplaint: "Covid19",
        result: "COVID-19 Positive",
        symptoms:
            "Symptoms of COVID-19 can vary, but may include fever, cough, shortness of breath or difficulty breathing, fatigue, body aches, loss of taste or smell, sore throat, congestion or runny nose, nausea or vomiting, and diarrhea.",
        causes: "COVID-19 is caused by the SARS-CoV-2 virus, which is primarily spread through respiratory droplets when an infected person talks, coughs, or sneezes. The virus can also spread by touching a surface or object contaminated with the virus and then touching your mouth, nose, or eyes.",
        treatment:
            "Treatment for COVID-19 involves managing symptoms and preventing complications. This may include rest, staying hydrated, over-the-counter pain relievers, and monitoring your symptoms at home. For severe cases, hospitalization and specialized medical care may be necessary.",
        followUp:
            "If you have been diagnosed with COVID-19, it is important to follow up with your healthcare provider for guidance on when it is safe to return to your normal activities and to monitor for any potential complications.",
    },
    Pneumonia: {
        chiefComplaint: "Pneumonia",
        result: "Pneumonia Positive",
        symptoms:
            "Symptoms of pneumonia can include cough, fever, shortness of breath or difficulty breathing, chest pain, chills, and fatigue. In some cases, people may also experience nausea, vomiting, or diarrhea.",
        causes: "Pneumonia is caused by a variety of bacteria, viruses, and other microorganisms. It can also be caused by inhaling chemical irritants or by aspiration of food, liquid, or other substances into the lungs.",
        treatment:
            "Treatment for pneumonia typically involves antibiotics or antiviral medications, rest, and staying hydrated. In some cases, hospitalization may be necessary, particularly for people who are older or who have underlying health conditions.",
        followUp:
            "If you have been diagnosed with pneumonia, it is important to follow up with your healthcare provider to ensure that your treatment is effective and to monitor for any potential complications.",
    },
    Normal: {
        chiefComplaint: "Covid19/Pneumonia",
        result: "Normal",
        symptoms: "No such symptoms found related to Covid19 and Pneumonia.",
        causes: "Pneumonia is caused by a variety of bacteria, viruses, and other microorganisms. COVID-19 is caused by the SARS-CoV-2 virus, which is primarily spread through respiratory droplets when an infected person talks, coughs, or sneezes.",
        treatment: "As such no treatment is required.",
        followUp:
            "It is important to follow up with your healthcare provider to ensure that your treatment is effective and to monitor for any potential complications.",
    },
};
// const breast_cancer = [{}, {}, {}];
const breast_cancer = {
    "Very Mild": {
        chiefComplaint: "Breast Cancer",
        result: "Very Mild Breast Cancer Detected.",
        symptoms:
            "A lump or thickening in the breast or underarm, Changes in breast size or shape, Nipple discharge or inversion, Skin changes on the breast, such as redness or dimpling, Persistent breast pain or discomfort",
        causes: "Family history, Inherited mutations in certain genes, such as BRCA1 and BRCA2, can increase the risk of developing breast cancer,  Exposure to estrogen and progesterone over time, such as from early onset of menstruation, late menopause, or use of hormone replacement therapy, can increase the risk of breast cancer, Obesity, lack of physical activity, alcohol consumption, and smoking have all been linked to an increased risk of breast cancer.",
        treatment:
            "There is no specific treatment for mild breast cancer as breast cancer is classified based on the stage and type of the cancer. Please concern with a specialist doctor.",
        followUp:
            "Regular physical exams, Imaging tests, Blood tests, Supportive care",
    },
    Mailgnant: {
        chiefComplaint: "Breast Cancer",
        result: "Mailgnant Breast Cancer Detected.",
        symptoms:
            "Symptoms of malignant breast cancer may include a lump or thickening in the breast or underarm, changes in the size or shape of the breast, nipple discharge or inversion, redness or scaling of the breast skin, and/or pain in the breast or nipple. However, in some cases, there may be no noticeable symptoms.",
        causes: "The exact cause of breast cancer is not known, but certain risk factors may increase a person's likelihood of developing the disease, such as age, gender (women are more likely to develop breast cancer), genetics, hormonal factors, lifestyle factors (such as diet and physical activity), and exposure to certain environmental factors.",
        treatment:
            "Treatment for malignant breast cancer may involve a combination of surgery, radiation therapy, chemotherapy, hormone therapy, and/or targeted therapy, depending on the stage and type of the cancer. The specific treatment plan will depend on the individual's unique situation and may require collaboration between a team of healthcare providers.",
        followUp:
            "Follow-up care for malignant breast cancer will typically involve regular check-ups with a healthcare provider, imaging tests to monitor for any signs of recurrence or progression, and support services to manage any long-term side effects of treatment.",
    },
    Normal: {
        chiefComplaint: "Breast Cancer",
        result: "Normal",
        symptoms: "No such symptoms found related to Breast Cancer.",
        causes: "The exact cause of breast cancer is not known, but certain risk factors may increase a person's likelihood of developing the disease, such as age, gender(women are more likely to develop breast cancer), genetics, hormonal factors, lifestyle factors (such as diet and physical activity), and exposure to certain environmental factors.",
        treatment: "As such no treatment is required.",
        followUp:
            "It is important to follow up with your healthcare provider to ensure that your treatment is effective and to monitor for any potential complications.",
    },
};
const brain_tumor = {
    "Glioma Tumor": {
        chiefComplaint: "Brain Tumor",
        result: "Glioma Tumor",
        symptoms:
            "The symptoms of a glioma tumor depend on the location and size of the tumor but may include headache, seizures, weakness, numbness, vision changes, cognitive changes, and personality changes.",
        causes: "The exact cause of glioma tumors is unknown, but they may develop as a result of genetic mutations or exposure to radiation.",
        treatment:
            "Treatment for glioma tumors may involve surgery, radiation therapy, chemotherapy, or a combination of these treatments. The specific treatment plan will depend on the size, location, and grade of the tumor as well as the overall health of the patient.",
        followUp:
            "After treatment, follow-up care is essential to monitor the tumor's growth, evaluate treatment effectiveness, and manage any side effects. Follow-up care may include regular imaging studies, neurological exams, and symptom assessments.",
    },
    "Meningioma Tumor": {
        chiefComplaint: "Brain Tumor",
        result: "Meningioma Tumor",
        symptoms:
            "Symptoms of Meningioma tumor can vary depending on the size and location of the tumor. Common symptoms include headaches, seizures, weakness or numbness in the limbs, difficulty with vision or hearing, changes in behavior or personality, and difficulty with balance or coordination.",
        causes: "The exact cause of Meningioma tumors is unknown, but research has shown that they may develop from abnormal growth of the cells that form the lining of the brain or spinal cord. Other risk factors for developing Meningioma tumors include a family history of the condition, exposure to radiation, and certain genetic disorders.",

        treatment:
            "The treatment for Meningioma tumors depends on the size and location of the tumor, as well as the patient's overall health. Treatment options may include observation, surgery, radiation therapy, or chemotherapy. Surgery is the primary treatment for most Meningioma tumors, and may be followed by radiation therapy or chemotherapy to destroy any remaining cancer cells.",

        followUp:
            "After treatment, patients with Meningioma tumors will need to have regular follow-up appointments with their doctor to monitor for any signs of recurrence. Follow-up care may include imaging tests, blood tests, and physical exams to check for any changes in the tumor or the patient's overall health. It is important for patients to follow their doctor's instructions for follow-up care to ensure the best possible outcome.",
    },
    "No Tumor": {
        chiefComplaint: "Brain Tumor",
        result: "Normal",
        symptoms: "No such symptoms found related to Brain Tumor.",
        causes: "The symptoms of a Brain Tumor can vary depending on the location and type of tumor. Common symptoms include pain or pressure in the affected area, changes in bowel or bladder habits, unexplained weight loss, fatigue, persistent coughing or hoarseness, and changes in vision or hearing. Other symptoms may include fever, chills, and night sweats. ",
        followUp:
            "It is important to follow up with your healthcare provider to ensure that your treatment is effective and to monitor for any potential complications.",
    },
    "Pituitary Tumor": {
        chiefComplaint: "Brain Tumor",
        result: "Pituitary Tumor",
        symptoms:
            "Symptoms of a pituitary tumor can vary depending on the size and location of the tumor, but may include headaches, vision problems, nausea and vomiting, fatigue, weakness, weight gain or loss, and irregular menstrual periods or loss of sex drive.",

        causes: "The exact causes of pituitary tumors are not well understood, but they are believed to be the result of genetic mutations or abnormal growth in the cells of the pituitary gland. Certain genetic conditions and hormonal imbalances may also increase the risk of developing a pituitary tumor.",

        treatment:
            "Treatment options for pituitary tumors may include surgery, radiation therapy, and medication. The choice of treatment depends on the type and size of the tumor, as well as the patient's age and overall health. Medications may be used to shrink the tumor or reduce hormone levels, while surgery and radiation therapy may be used to remove or destroy the tumor.",

        followUp:
            "After treatment, patients with pituitary tumors will need regular follow-up visits with their healthcare provider to monitor their hormone levels and check for any signs of tumor growth or recurrence. Patients should also maintain a healthy lifestyle, including a balanced diet and regular exercise, to help manage their symptoms and reduce their risk of complications.",
    },
};
// const pneumonia = {};
// const normal = {};

function getData(obj, result) {
    for (const key in obj) {
        if (key == result) return obj[result];
    }
}

function findData(lab, result) {
    if (lab == "covid19_pneumonia") {
        return getData(covid19_pneumonia, result);
    } else if (lab == "breast_cancer") {
        return getData(breast_cancer, result);
    } else if (lab == "brain_tumor") {
        return getData(brain_tumor, result);
    }
}
module.exports = { findData };
