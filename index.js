const inventory = newInventory()
move(inventory).to(0, 0)

// Reminder: move is a type of function where an element is put in as an argument and then a callback function
// within that function is invoked using it's key ( there is a return within the funciton that creates an object {to: movecharacter}.... hence the .to(x,y))
const character = newImage('assets/green-character/static.gif')
// It will only run once and direction is not in scope. We also don't want it to run constantly with setInterval, only when direction is changed.
// Direction added as parameter to solve scope issue
function handleDirectionChange(direction){
    if(direction === null){
        character.src = 'assets/green-character/static.gif'
    }
    if(direction === 'west'){
        character.src = 'assets/green-character/west.gif'
    }
    if(direction === 'north'){
        character.src = 'assets/green-character/north.gif'
    }
    if(direction === 'east'){
        character.src = 'assets/green-character/east.gif'
    }
    if(direction === 'south'){
        character.src = 'assets/green-character/south.gif'
    }
}
// Direction change is in move. We don't want to hardcode the image logic in move but rather use a callback to handleDirectionChange, 
// that way the function can be invoked when applicable to a situation. In other words move would alert handleDirectionChange that the direction has changed.
// To solve the scope issue... direction still isn't in scope where we define handleDirectionChange however it is in scope where this function is called upon. Therefore we can pass it in as an argument
move(character).withArrowKeys(100, 250, handleDirectionChange)

move(newImage('assets/tree.png')).withArrowKeys(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)