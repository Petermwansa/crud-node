import express from "express";
import { v4 as uuidv4 } from 'uuid';  // we will use it to create unique ids for the users



const router = express.Router();

let users = [

];

//the routes in here are starting with /users
router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});

router.post('/', (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4() });
    res.send(`User with the name ${user.fName} has been added to the database`);
})

//  /user/2 => req.params { id: 2 }
router.get('/:id' , (req, res) => {

    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id );

    res.send(foundUser);
});



// here we add the router for deleting 
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with the id of ${id} has been deleted from the database`);
})


export default router;

