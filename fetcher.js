const request = require("request");
const fs = require("fs")

const url = process.argv[2];
const saveLocation = process.argv[3];


request(url, (error, response, body) => {
  if (error) {
    console.log("error:", error);
  } else {
    fs.writeFile (saveLocation, body, (error) => {
      if (error) {  
        console.log("error:", error);
      } else {
        console.log(`Downloaded and saved ${body.length} bytes to ${saveLocation}`);
      }
    });
  }
})