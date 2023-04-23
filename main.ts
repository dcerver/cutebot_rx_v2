radio.onReceivedValue(function (name, value) {
    if (name == "Speed") {
        basic.showString(name)
        basic.showNumber(value)
        basic.pause(100)
    } else if (name == "Yaw") {
        basic.showString(name)
        basic.showNumber(value)
        basic.pause(100)
    }
})
radio.setGroup(1)
