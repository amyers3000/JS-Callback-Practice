//  Reminder: move is a type of function where an element is put in as an argument and then a callback function
// within that function is invoked using it's key ( there is a return within the funciton that creates an object {to: movecharacter}.... hence the .to(x,y))
function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom, callback){
        let direction = null;
        let x = left;
        let y = bottom;
    
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        // Changes character coordinates
        function moveCharacter(){ 
            if(direction === 'west'){
                x-=1
            }
            if(direction === 'north'){
                y+=1
            }
            if(direction === 'east'){
                x+=1
            }
            if(direction === 'south'){
                y-=1
            }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }
        // funciton that invokes a call back function every 1 milisecond. Allows logic to repeat
        setInterval(moveCharacter, 1)
        // When arrow button is pushed down the direction variable is changed. e.key is part of the event 'keydown' along with 'e.repeat'
        document.addEventListener('keydown', function(e){
            // This allows the event to be repeated I believe?
            if(e.repeat) return;
        
            if(e.key === 'ArrowLeft'){
                direction = 'west'
            }
            if(e.key === 'ArrowUp'){
                direction = 'north'
            }
            if(e.key === 'ArrowRight'){
                direction = 'east'
            }
            if(e.key === 'ArrowDown'){
                direction = 'south'
            }
            // To solve the scope issue... direction still isn't in scope where we define handleDirectionChange however it is in scope where this function is called upon. Therefore we can pass it in as an argument
            // callback, aka handleDirectionChange, will take new direction and flow through it's logic
           
             callback(direction)
            
        })
        // When the button is released the direction goes back to null. No movement.
        document.addEventListener('keyup', function(e){
            direction = null
            // adding callback, aka handle direction change function, to return image to normal
            // To solve the scope issue... direction still isn't in scope where we define handleDirectionChange however it is in scope where this function is called upon. Therefore we can pass it in as an argument
           
            callback(direction)
            
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }        
}