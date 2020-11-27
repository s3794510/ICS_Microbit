radio.onReceivedNumber(function (receivedNumber) {
    radio_value = receivedNumber
    if (player == 0) {
        radio_set_player()
    }
    if (receivedNumber == 30) {
        move += 1
    }
    if (receivedNumber == 15) {
        move += 1
    }
})
function player_move () {
    if (input.buttonIsPressed(Button.A)) {
        if (player == 1 && move % 2 == 0) {
            move += 1
            radio.sendNumber(15)
        }
        if (player == 2 && move % 2 == 1) {
            move += 1
            radio.sendNumber(30)
        }
    }
}
function radio_set_player () {
    player = radio_value
    radio.sendNumber(1)
    basic.showNumber(player)
}
let radio_value = 0
let move = 0
let player = 0
radio.setGroup(25)
player = 0
move = 0
basic.forever(function () {
    if (player == 0) {
        basic.showNumber(player)
        if (input.buttonIsPressed(Button.A)) {
            radio.sendNumber(2)
        }
    } else {
        basic.showNumber(move)
        if (input.buttonIsPressed(Button.A)) {
            player_move()
        }
    }
})
