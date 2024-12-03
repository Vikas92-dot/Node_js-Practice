import event from "events";

const eventEmitter = new event.EventEmitter();

eventEmitter.on('hello',()=>{
    console.log("Hello Friends.....");
});
eventEmitter.on("finish",()=>{
    console.log("Finish event caught....");
});
eventEmitter.on("end",()=>{
    console.log("End event caught....");
});
eventEmitter.on("error",()=>{
    console.log("Error event Caught....");
});
eventEmitter.on("data",()=>{
    console.log("Data event caught....");
});

eventEmitter.emit("hello");
eventEmitter.emit("data");
eventEmitter.emit("end");
eventEmitter.emit("error");
eventEmitter.emit("finish");
eventEmitter.emit("finish");
eventEmitter.emit("finish");