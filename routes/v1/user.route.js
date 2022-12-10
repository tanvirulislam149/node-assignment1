const express = require('express');
const router = express.Router();
const userController = require("../../controllers/userController")

router
  /* 
  * @api get (/random) get a random user
  * @apiDescription Getting random user
  * @apiPermission user
  * @apiHeader 
  * @apiParam 
  * @apiParam 
  * @apiSuccess {Object[]} getting random user
  * @apiError 
  */
  .get("/random", userController.getRandomUser)
  /* 
  * @api get (/all) get all user
  * @apiDescription Getting all user
  * @apiPermission user
  * @apiHeader 
  * @apiQuery limit - limit the users 
  * @apiParam 
  * @apiSuccess {Object[]} getting all user
  * @apiError 
  */
  .get("/all", userController.getAllUser)
  /* 
  * @api post (/save) save a user
  * @apiDescription saving inputted user
  * @apiPermission user
  * @apiHeader 
  * @apiQuery  
  * @apiParam 
  * @apiSuccess {Object[]} New users list
  * @apiError 
  */
  .post("/save", userController.postUser)
  /* 
* @api patch (/update) update a user
* @apiDescription updating a user
* @apiPermission user
* @apiHeader 
* @apiQuery  
* @apiParam user id
* @apiSuccess {Object[]} New users list
* @apiError 
*/
  .patch("/update/:id", userController.updateAUser)
  /* 
* @api patch (/bulk-update) update multiple user
* @apiDescription updating multiple user
* @apiPermission user
* @apiHeader 
* @apiQuery  
* @apiParam 
* @apiSuccess {Object[]} New users list
* @apiError 
*/
  .patch("/bulk-update", userController.bulkUpdate)
  /* 
* @api delete (/delete) delete a user
* @apiDescription deleting a user
* @apiPermission user
* @apiHeader 
* @apiQuery  
* @apiParam user id
* @apiSuccess {Object[]} New users list
* @apiError 
*/
  .delete("/delete/:id", userController.deleteUser)

module.exports = router;



/* 
[{"id":1,"photoUrl":"http://placehold.it/32x32","name":"Patrice Espinoza","gender":"female","contact":"+880 (946) 534-3833","address":"350 Cumberland Street, Chloride, Illinois, 3552"},{"id":2,"photoUrl":"http://placehold.it/32x32","name":"Velma Perkins","gender":"female","contact":"+880 (924) 435-2210","address":"164 Hicks Street, Southmont, Oklahoma, 2221"},{"id":3,"photoUrl":"http://placehold.it/32x32","name":"Bettye Byrd","gender":"female","contact":"+880 (832) 564-3661","address":"556 Holt Court, Tecolotito, Rhode Island, 2202"},{"id":4,"photoUrl":"http://placehold.it/32x32","name":"Kathy Mcintosh","gender":"female","contact":"+880 (989) 456-3037","address":"812 Dunne Place, Avoca, New Mexico, 5319"},{"id":5,"photoUrl":"http://placehold.it/32x32","name":"Sherry French","gender":"female","contact":"+880 (952) 466-3446","address":"782 Railroad Avenue, Nutrioso, Georgia, 5668"},{"id":6,"photoUrl":"http://placehold.it/32x32","name":"Alissa Knox","gender":"female","contact":"+880 (910) 553-3893","address":"591 Lefferts Place, Rehrersburg, Louisiana, 5213"},{"id":7,"photoUrl":"sevenPhotoUrl","name":"seven","gender":"male","contact":"+880 (990) 479-2879","address":"663 Vandam Street, Bonanza, Delaware, 6180"}]


*/