const EventEmiter = require("events")

const myEmitter = new EventEmiter()

// listener

myEmitter.on('birthday',()=>{
    console.log("HAPPY BIRTHDAY TO YOU")
})


myEmitter.on('birthday',(gift)=>{
    console.log(`i will send a ${gift}`)
})


myEmitter.emit('birthday', 'watch')