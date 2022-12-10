const fs = require("fs");

const getRandomUser = (req, res, next) => {
  fs.readFile("data.json", (err, data) => {
    if (err) {
      res.send("Failed to load data")
    }
    else {
      const users = JSON.parse(data);
      const check = (users) => {
        const randomUserId = parseInt(Math.random() * 100);
        if (randomUserId > users.length || randomUserId <= 0) {
          // console.log(randomUserId)
          check(users)
        }
        else {
          const user = users.find(e => e.id === randomUserId);
          res.send(user)
        }
      }
      check(users);
    }
  })
}

const getAllUser = (req, res, next) => {
  const limit = req.query.limit;
  fs.readFile("data.json", (err, data) => {
    if (err) {
      res.send("Failed to load data")
    }
    else {
      const users = JSON.parse(data);
      res.send(users.slice(0, limit))
    }
  })
}

const postUser = (req, res, next) => {
  const { name, gender, photoUrl, contact, address } = req.body;
  if (!name.trim().length || !gender.trim().length || !photoUrl.trim().length || !contact.trim().length || !address.trim().length) {
    res.send("Please add all the properties.")
  }
  else {
    fs.readFile("data.json", (err, data) => {
      if (err) {
        res.send("Failed to load users")
      }
      else {
        const users = JSON.parse(data);
        req.body["id"] = users.length + 1;
        users.push(req.body);
        const newUsers = JSON.stringify(users)
        fs.writeFile("data.json", newUsers, (err) => {
          if (err) {
            res.send("Failed to write file")
          }
          else {
            res.send(users)
          }
        })
      }
    })
  }
}


const updateAUser = (req, res, next) => {
  // const { id, name, gender, photoUrl, contact, address } = req.body;
  const { id } = req.params;
  fs.readFile("data.json", (err, data) => {
    if (err) {
      res.send("Failed to load users")
    }
    else {
      const users = JSON.parse(data);
      const findId = users.find(u => u.id === parseInt(id));
      if (!findId) {
        res.send(`Please try with these ids ${users.map(u => u.id)}`)
      }
      else {
        const newData = users.find(user => user.id == id)
        req.body.photoUrl ? newData.photoUrl = req.body.photoUrl : ""
        req.body.name ? newData.name = req.body.name : ""
        req.body.gender ? newData.gender = req.body.gender : ""
        req.body.contact ? newData.contact = req.body.contact : ""
        req.body.address ? newData.address = req.body.address : ""


        let restUsers = users.filter(item => item.id !== newData.id);
        console.log(restUsers)
        restUsers.push(newData);

        const usersList = restUsers.sort(function (a, b) {
          return a.id - b.id;
        });

        const newUsers = JSON.stringify(usersList)
        fs.writeFile("data.json", newUsers, (err) => {
          if (err) {
            res.send("Failed to write file")
          }
          else {
            res.send(newUsers)
          }
        })
      }
    }
  })
}

const bulkUpdate = (req, res, next) => {
  res.send("Can't figure out how to do it. Kindly send the solution with the result if possible")
}

const deleteUser = (req, res, next) => {
  const { id } = req.params;
  fs.readFile("data.json", (err, data) => {
    if (err) {
      res.send("Failed to load users")
    }
    else {
      const users = JSON.parse(data);
      const findId = users.find(u => u.id === parseInt(id));
      if (!findId) {
        res.send(`Please try with these ids ${users.map(u => u.id)}`)
      }
      else {
        let restUsers = users.filter(item => item.id !== parseInt(id));

        const usersList = restUsers.sort(function (a, b) {
          return a.id - b.id;
        });
        const newUsers = JSON.stringify(usersList)
        fs.writeFile("data.json", newUsers, (err) => {
          if (err) {
            res.send("Failed to write file")
          }
          else {
            res.send(newUsers)
          }
        })
      }
    }
  })
}

module.exports = { getRandomUser, getAllUser, postUser, updateAUser, bulkUpdate, deleteUser }