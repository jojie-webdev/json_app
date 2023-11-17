'use strict';

const cors = require('cors');
const express = require('express');

run().catch((err) => console.log(err));

async function run() {
  const app = express();

  app.use(express.json());

  app.get('/test', cors(), (req, res) => {
    console.log('get');
    // const info = {
    //   id: 126946708,
    //   node_id: {
    //     foo: {
    //       name: "mgmg",
    //       test: 123,
    //       test1: null,
    //       test2: {
    //         test22: 22,
    //       },
    //     },
    //   },
    // }
    const info = [
      {
        "id": 1,
        // "name": "Leanne Graham",
        // "username": "Bret",
        // "email": "Sincere@april.biz",
        // "address": [{
        //   id: 0, 
        //   "street": "Kulas Light",
        //   "suite": "Apt. 556",
        //   "city": "Gwenborough",
        //   "zipcode": "92998-3874",
        //   test: {
        //     foo: "bar",
        //   }
        // },
        // {
        //   id: 2, 
        //   "street": "Kulas Light",
        //   "suite": "Apt. 556",
        //   "city": "Gwenborough",
        //   "zipcode": "92998-3874"
        // }]
        "name": {
          "address": [{
            id: 0, 
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            test: {
              foo: "bar",
            },
            "0": "test value"
          },
          {
            id: 2, 
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874"
          }]
        }
      },
    ];
    res.status(200).json(info);
  });

  // Serve up `oauth-dialog.html`
  app.use(express.static('./'));

  await app.listen(3001);
  console.log('Listening on port 3001');
}
