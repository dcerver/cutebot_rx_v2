radio.onReceivedValue(function (name, value) {
    if (name == "Speed") {
        cuteBot.motors(value, value)
    } else if (name == "Yaw") {
    	
    }
})
radio.setGroup(1)
