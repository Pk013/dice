function rollOneDice() {
    const output = document.getElementById("output1")
    const diceroll1d6 = document.createElement("p")
    output.appendChild(diceroll1d6)
    let diceroll = Math.floor(Math.random() * 6) + 1
    let gurl = document.createTextNode(diceroll)
    diceroll1d6.appendChild(gurl)
}
rollOneDice()


function rollTwoDice() {
    const output = document.getElementById("output2")
    const diceroll2d6 = document.createElement("p")
    output.appendChild(diceroll2d6)
    let diceroll = Math.floor(Math.random() * 6) + 1
    let diceroll2 = Math.floor(Math.random() * 6) + 1
    let stone = document.createTextNode(diceroll2 + " dice roll 1 to the left")
    let rock = document.createTextNode(diceroll + " ")
    diceroll2d6.appendChild(rock)
    diceroll2d6.appendChild(stone)
}
rollTwoDice()

function rollBois() {
    const output = document.getElementById("output3")
    const rollLots = document.createElement("p")
    output.appendChild(rollLots)
    let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    for (let i = 0; i <= 1000; i++) {
        let diceroll = Math.floor(Math.random() * 6) + 1
        let diceroll2 = Math.floor(Math.random() * 6) + 1
        let result = diceroll + diceroll2
        count[result - 2] += 1
    }
    let counter = document.createTextNode(count + " ")
    rollLots.appendChild(counter)

}
rollBois()