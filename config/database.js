// config/database.js

// configs to connect to the database

//=================================USE THIS FOR ADMIN COMPUTER===================================
// module.exports = {
//     'connection': {
//       // local configs.
//         'host' : 'localhost',
//         'user': 'root',
//         'password': '',
// 			'database': 'eqsAuction'
//     }   
// };

//=================================USE THIS FOR OTHER COMPUTER===================================
// module.exports = {
//     'connection': {
//       // local configs.
//         'host' : '192.168.0.11',
//         'user': 'piyush',
//         'password': 'password',
// 			'database': 'eqsAuction'
//     }   
// };

//=================================USE THIS FOR SERVER===================================
module.exports = {
    'connection': {
      // server configs.
        'host' : 'equip.cnv3bnhwzpw1.us-east-2.rds.amazonaws.com',
        'user': 'chitransh',
        'password': 'mission1',
        'database': 'eqsAuction'
    }
};
