function move(element) {
    element.style.position = 'fixed';

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px';
        element.style.bottom = bottom + 'px';
    }

    function moveWithArrowKeys(left, bottom, onDirectionChange) {
        let direction = null;
        let x = left;
        let y = bottom;

        element.style.left = x + 'px';
        element.style.bottom = y + 'px';

        function moveCharacter(){
            if (direction === 'west') x--;
            if (direction === 'north') y++;
            if (direction === 'east') x++;
            if (direction === 'south') y--;
            element.style.left = x + 'px';
            element.style.bottom = y + 'px';
        }

        setInterval(moveCharacter, 1);

        document.addEventListener('keydown', function(e) {
            if (e.repeat) return;
            if (e.key === 'ArrowLeft') direction = 'west';
            if (e.key === 'ArrowUp') direction = 'north';
            if (e.key === 'ArrowRight') direction = 'east';
            if (e.key === 'ArrowDown') direction = 'south';
            onDirectionChange(direction);
        });

        document.addEventListener('keyup', function(e) {
            direction = null;
            onDirectionChange(direction);
        });
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}