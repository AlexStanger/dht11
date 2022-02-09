basic.forever(function () {
    basic.showString("TEMP: ")
    basic.showNumber(Environment_IoT.temperature(DHT11Type.DHT11_temperature_F, DigitalPin.P0))
    basic.showString("Humi: ")
    basic.showNumber(Environment_IoT.temperature(DHT11Type.DHT11_humidity, DigitalPin.P0))
    if (Environment_IoT.temperature(DHT11Type.DHT11_temperature_C, DigitalPin.P0) > 30) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(5000)
    }
    if (Environment_IoT.temperature(DHT11Type.DHT11_temperature_C, DigitalPin.P0) == 30) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(5000)
    }
    if (Environment_IoT.temperature(DHT11Type.DHT11_temperature_C, DigitalPin.P0) < 30) {
        pins.digitalWritePin(DigitalPin.P3, 1)
        basic.pause(5000)
    }
})
