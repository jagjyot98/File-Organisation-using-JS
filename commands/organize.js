const fs = require("fs"); //fs module
const path = require("path"); //path module
let types = {
  //folder : files with extensions to be put in folder
    media: ["mp4", "mkv", "mp3","mov"], //files with stated extensions will be put inside the media folder
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb","apk"],
    images: ['png','jpg','jpeg']
}
//add upper check for extensins 

function organize(srcPath) {
  if (srcPath == undefined) {     //1. to check if srcPath is present

    //console.log(srcPath); //undefined

    //The process.cwd() method returns the current working directory of the Node.js process.
    srcPath = process.cwd();

    console.log("source path is ",srcPath);
  }
  else console.log(srcPath);

  //2. to create a directory-> organized_files

  // let organizedFiles = srcPath + "/" +"organized_files";    //same as below statement
  let organizedFiles = path.join(srcPath, "organized_files");   //joins string "organized_files" to the present source path

  console.log("organized files folder path is ", organizedFiles);
  
  if (fs.existsSync(organizedFiles) == false) {
    //organizedfiles naam ka folder exist nhi krta to ek folder bana do warna rhne do
    
    fs.mkdirSync(organizedFiles);   // completes the given path, if a folder not exist in path then it creates it, here "organized_files" at the end of existing path

  } 
  else 
    console.log("folder already exists");

  //3. scan the entire srcPath(doenloads folder in this case)

  //Reads the contents of the directory.-> 
    let allFiles = fs.readdirSync(srcPath); //basically reads the names of files present in directory
    console.log(allFiles);

  //4.trvaerse over all the files and classify them on the basis of their extension (.pdf , .mp3)
    for (let i = 0; i < allFiles.length; i++){
        // let ext = allFiles[i].split(".")[1];
        let ext = path.extname(allFiles[i]);  //reads files extension 
        console.log(ext);
    }
}

module.exports = {
  organizeFnKey:organize
}

// copy path from side file menu will give "\" in between file path but the system is looking for "/", so change the slash to "/"
// let srcPath="C:/Users/Jagjyot Singh/Desktop/NADOS FJP/FileOrg/downloads"
// // }
// organize(srcPath)