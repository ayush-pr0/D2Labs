require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { main } = require("./partials/main");
const { Configuration, OpenAIApi } = require("openai");

const app = express();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public\\upload");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const openAi = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY,
  })
);

const upload = multer({ storage: storage });
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {});
});

app.get("/about", (req, res) => {
  res.render("about", {});
});

app.get("/labs", (req, res) => {
  res.render("labs", {});
});

app.get("/covid19-pneumonia", (req, res) => {
  res.render("covid19-pneumonia", {});
});
app.post("/covid19-pneumonia", upload.single("img"), (req, res) => {
  console.log(req.body);
  main(req, res, "X-Ray Images", "covid19_pneumonia");
});

app.get("/brainTumor", (req, res) => {
  res.render("brainTumor", {});
});
app.post("/brainTumor", upload.single("img"), (req, res) => {
  console.log(req.body);
  main(req, res, "MRI Images", "brain_tumor");
});

app.get("/breastCancer", (req, res) => {
  res.render("breastCancer", {});
});
app.post("/breastCancer", upload.single("img"), (req, res) => {
  console.log(req.body);
  main(req, res, "Ultrasound Images", "breast_cancer");
});

app.get("/contact", (req, res) => {
  res.render("contact", {});
});

app.post("/healthgpt", async (req, res) => {
  console.log(req.body);
  try {
    const { chatInput } = req.body;
    openAi
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `${process.env.INIT_PROMPT}\n\nQuestion: ${chatInput}`,
          },
        ],
      })
      .then((response) => {
        return res.status(200).json({
          success: true,
          msg: response.data.choices[0].message.content,
        });
      });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.response
        ? error.response.data
        : "There in an issue with the server",
    });
  }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Listening on port 3000...");
  fs.mkdirSync(__dirname + "\\public\\result\\covid19_pneumonia", {
    recursive: true,
  });
  fs.mkdirSync(__dirname + "\\public\\result\\brain_tumor", {
    recursive: true,
  });
  fs.mkdirSync(__dirname + "\\public\\result\\breast_cancer", {
    recursive: true,
  });
  fs.mkdirSync(__dirname + "\\public\\upload", {
    recursive: true,
  });
  fs.mkdirSync(__dirname + "\\public\\html", {
    recursive: true,
  });
  fs.mkdirSync(__dirname + "\\public\\pdf", {
    recursive: true,
  });
});
