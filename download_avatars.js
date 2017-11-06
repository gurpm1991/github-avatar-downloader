var request = require('request');
var secrets = require('./secrets');

console.log('Welcome to the GitHub Avatar Downloader!');

// var owner = process.argv[2];
// var repo = process.argv[3];

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'gurpm1991',
      'Authorization' : 'token '+ secrets.GITHUB_TOKEN
    }
  }

  request(options, function(err, res, body) {
    cb(err, body);
  });
}


getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});







// function downloadImageByURL(url, filePath) {
//  request.get(url)
//      .on('error', function (err) {
//      throw err; 
//      })
//      .on('response', function (response) {
//      console.log('Response Status Code: ', response.statusCode);
//      })
//      .pipe(fs.createWriteStream(filePath)); 
// }