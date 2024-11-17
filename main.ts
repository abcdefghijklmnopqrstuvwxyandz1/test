hummingbird.startHummingbird()
basic.forever(function () {
    for (let index = 0; index < 99999; index++) {
        hummingbird.setRotationServo(FourPort.One, hummingbird.getSensor(SensorType.Light, ThreePort.One))
        hummingbird.setTriLED(
        TwoPort.One,
        hummingbird.getSensor(SensorType.Dial, ThreePort.Two),
        hummingbird.getSensor(SensorType.Dial, ThreePort.Two),
        hummingbird.getSensor(SensorType.Dial, ThreePort.Two)
        )
    }
})
