const fs=require("fs")

// Here read the txt file 

// const data=fs.readFileSync("nodejs_architecture.txt")

// console.log(data.toString());

// const nodeAdv="One of the most important features of node.js is the ability to create lightning-fast apps that produce results in seconds.The ability to multitask that Node.js provides is extremely beneficial to web apps. Its event-driven, single-threaded design rapidly processes several simultaneous requests without clogging the RAM. Additionally, its event-loop and non-blocking I/O operations allow code to be executed at a rate that indirectly influences the application's overall performance.Node.js advantage is that it is powered by the V8 engine in Google Chrome, written in C++. It rapidly and efficiently converts JavaScript to machine code."
// append notes here
// fs.appendFileSync("nodejs_architecture.txt",nodeAdv)

// const result=fs.readFileSync("nodejs_architecture.txt")

// console.log(result.toString());

// Delete the "nodejs_architecture.txt" file

const deleteFile=fs.unlink("nodejs_architecture.txt",()=>{
    console.log("File Deleted Successfully");
})

console.log(deleteFile);


