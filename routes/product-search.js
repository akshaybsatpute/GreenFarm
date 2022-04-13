const router = require('express').Router();

const algoliasearch = require('algoliasearch');
const client = algoliasearch('HNK8EZM9SX', '45d0472f2293cce913882a933f5ccca5');
const index = client.initIndex('GreenFarm');



// router.get('/', (req, res, next) => {
//   if (req.query.query) {
//     index.search({
//       query: req.query.query,
//       page: req.query.page,
//     }, (err, content) => {
//       res.json({
//         success: true,
//         message: "Here is your search",
//         status: 200,
//         content: content,
//         search_result: req.query.query
//       });
//     });
//   }
// });
// router.get('/', (req, res, next) => {
// index.search(req.query.query,req.query.page,
//   {

//   })
// .then(({ hits }) => {
//   res.json({
//                  success: true,
//                  message: "Here is your search result",
//                  status: 200,
//                  content: content,
//                  search_result: req.query.query
//              });
//     res.json(hits);
//     console.log(hits);
// });
// });

// router.get('/',(req, res, next) => {
//   try{
//   if (req.query.query) {
//      index.search(query=req.query.query,page=req.query.page ).then(({ err,hits }) => {
//       res.json({
//         success: true,
//         message: "Here is your search result",
//         status: 200,
//         content: hits,
//         search_result: req.query.query
//     })
//        console.log(hits);
//       console.log(err);
//   })
//  }else { res.json({
//      success: false,
//      message : "please enter search term",
//   });
//   }
// }catch(err)
// {
// next(err);
// }
// });


// module.exports = router;

// index.search('query string', {
//   headers: { 'X-Algolia-UserToken': 'user123' }
// }).then(({ hits }) => {
//   console.log(hits);
// });



// router.get('/', (req, res, next) => {
//   if (req.query.query) {
//     index.search(
//       query = req.query.query,
//       page = req.query.page,
//      (err, content) => {
//       res.json({
//         success: true,
//         message: "Here is your search",
//         status: 200,
//         content: content,
//         search_result: req.query.query
//       });
//     });
//   }
// });
// module.exports = router;











































router.get('/',(req, res, next) => {
  try{
  if (req.query.query) {
     index.search(query=req.query.query,page=req.query.page ).then((err,result) => {
      res.json({
        success: true,
        message: "Here is your search result",
        status: 200,
        content: err,
        search_result: req.query.query
    })
       console.log(result);
      console.log(err);
  })
 }else { res.json({
     success: false,
     message : "please enter search term",
  });
  }
}catch(err)
{
next(err);
}
});
module.exports = router;