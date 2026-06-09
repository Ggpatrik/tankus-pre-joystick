radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1024) {
        servos.P1.run(100)
        servos.P0.run(-100)
    } else if (receivedNumber == 0) {
        servos.P0.run(100)
        servos.P1.run(-100)
    } else if (receivedNumber == 530) {
        servos.P1.run(100)
        servos.P0.run(100)
        basic.pause(1000)
        servos.P1.stop()
        servos.P0.stop()
    } else if (receivedNumber == 489) {
        servos.P0.run(-100)
        servos.P1.run(-100)
        basic.pause(1000)
        servos.P1.stop()
        servos.P0.stop()
    } else if (receivedNumber == 666) {
        servos.P1.stop()
        servos.P0.stop()
    } else if (receivedNumber == 594) {
        servos.P0.stop()
        servos.P1.stop()
    }
})
radio.setGroup(255)
basic.forever(function () {
	
})
