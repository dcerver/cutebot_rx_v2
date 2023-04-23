radio.onReceivedValue(function (name, value) {
    if (name == "Speed") {
        Speed = value
        cuteBot.motors(Speed, Speed)
    } else if (name == "Yaw") {
        Yaw = value
        if (Yaw > 10) {
            cuteBot.motors(Yaw, 5)
        } else if (Yaw < 10) {
            cuteBot.motors(5, Math.abs(Yaw))
        }
    }
})
let Yaw = 0
let Speed = 0
radio.setGroup(1)
