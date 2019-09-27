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
        const {name, address, city, state, zip, image, mortgage, rent} = req.body;
        db.addHouse({name, address, city, state, zip, image, mortgage, rent})
            .then(result => {
                res.status(200).send(result);
            })
          .catch(err => {
            res.status(500).send("This did not add a house");
            console.log(err);
          });
    },

    deleteHouse: (req, res) => {
        const db = req.app.get("db");
        const {id} = req.params;
        db.deleteHouse([id]).then(result=> {
            res.status(200).send(result);

        });
    }
};