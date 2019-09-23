module.exports = {
    getHouses: (req, res) => {
        const db = req.app.get("db");

        db.getHouses()
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            res.status(500).send("Everybody makes mistakes, everybody has those days");
            console.log(err)
        });
    },

    addHouse: (req, res) => {
        const db = req.app.get("db");
        const {name, address, city, state, zip} = req.body;
        db.addHouse({name, address, city, state, zip})
            .then(result => {
                res.status(200).send(result);
            })
          .catch(err => {
            res.status(500).send("This did not add a house");
            console.log(err);
          });
    }
}