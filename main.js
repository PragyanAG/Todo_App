const fs = require("fs")
const path = require("path")
directory = "./"

// Call getAllFiles function to get available files
const fileList = getAllFiles(directory)

// Lists file having content TODO excluding current script file.
fileList.forEach(function(entry) { 
	if(entry != __filename){
		fs.readFile(entry, function (err, data) {
		  if (err) throw err;
		  var fileContent = data.toString() 
		  
		  if(fileContent.indexOf("TODO") >= 0 ){
			console.log(entry)
		  }
		});
	}
});


// Recursive Function to get all file list from current directory
const getAllFiles = function(dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath)
  arrayOfFiles = arrayOfFiles || []

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
    } else {		
      arrayOfFiles.push(path.join(__dirname, dirPath, "/", file))
    }
  })

  return arrayOfFiles
}
