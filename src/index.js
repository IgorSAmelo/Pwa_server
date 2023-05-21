const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const db = require("./models/db");
const Message = require("./models/Message");

/* ROTAS */
app.post("/createmessage", async (req, res) => {
  const { name, email, message } = req.body;

  console.log(name, email, message);

  await Message.create({
    name: name,
    email: email,
    message: message,
  })
    .then(function () {
      console.log("Cadastrado com sucesso!");
      return res.status(200).send({
        msg: "Email enviado com sucesso",
        data: { name: name, email: email, message: message },
      });
    })
    .catch(function (err) {
      console.log(`Ops, houve um erro: ${err.message}`);
    });

  // api to get users
  app.get("/listarmessage", async (req, res) => {
    Message.find(function (err, messages) {
      if (err) {
        res
          .status(400)
          .send({ status: "failure", mssg: "Something went wrong" });
      } else {
        res.status(200).json({ status: "success", users: messeges });
      }
    });
   
    // api to update route
    app.update("/update/:id").put(function (req, res) {
      Message.findById(req.params.id, function (err, user) {
        if (!user) {
          res
            .status(400)
            .send({ status: "failure", mssg: "Unable to find data" });
        } else {
          user.name = req.body.name;
          user.email = req.body.email;
          user.message = req.body.message;

          user.save().then((business) => {
            res
              .status(200)
              .json({ status: "success", mssg: "Update complete" });
          });
        }
      });
    });
  });
});

// api for delete
app.delete('/delete/:id').delete(function (req, res) {
  Message.findByIdAndRemove({_id: req.params.id}, function(err,){
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','mssg': 'Delete successfully'});
    }
  });
});

app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});
