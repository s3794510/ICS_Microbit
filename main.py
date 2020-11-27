def on_received_number(receivedNumber):
    global radio_value, move
    radio_value = receivedNumber
    if player == 0:
        radio_set_player()
    if receivedNumber == 30:
        move += 1
    if receivedNumber == 15:
        move += 1
radio.on_received_number(on_received_number)

def player_move():
    global move
    if input.button_is_pressed(Button.A):
        if player == 1 and move % 2 == 0:
            move += 1
            radio.send_number(15)
        if player == 2 and move % 2 == 1:
            move += 1
            radio.send_number(30)
def radio_set_player():
    global player
    player = radio_value
    radio.send_number(1)
    basic.show_number(player)
radio_value = 0
move = 0
player = 0
radio.set_group(25)
player = 0
move = 0

def on_forever():
    if player == 0:
        basic.show_number(player)
        if input.button_is_pressed(Button.A):
            radio.send_number(2)
    else:
        basic.show_number(move)
        if input.button_is_pressed(Button.A):
            player_move()
basic.forever(on_forever)
