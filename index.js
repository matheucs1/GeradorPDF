const pdf = require("html-pdf");
const ejs = require("ejs");

const nomeDoUsuario = "Teste";
const curso = "Formação Node.js";
const categoria = "JavaScript";


ejs.renderFile("./index.ejs", { nome: nomeDoUsuario, curso: curso, categoria: categoria }, (err, html) => {
    if (err) {
        console.log("Error: " + err);
    } else {
        pdf.create(html, {}).toFile("./MeuPdf.pdf", (err, res) => {
            if (err) {
                console.log("Error creating")
            } else {
                console.log(res);
            }
        });
    }
})


