radio.onReceivedValue(function (name, value) {
    if (name == "Speed") {
        cuteBot.motors(value, value)
    } else if (name == "Yaw") {
        if (value > 10) {
            cuteBot.motors(value, 5)
        } else if (value < 10) {
            cuteBot.motors(5, Math.abs(value))
        }
    }
})
radio.setGroup(1)
