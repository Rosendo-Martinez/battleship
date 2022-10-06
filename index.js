function Ship(shipLength) {
    let ship = Array(shipLength).fill(0);

    function isSunk() {
        for (let i = 0; i < ship.length; i++) {
            if (ship[i] === 0) {
                return false;
            }
        }
        return true;
    }

    function hit(location) {
        ship[location] = 1;
    } 
    
    return {ship, isSunk, hit};
}

// Gameboard:
    // NxN with N * N coordinates
    // Each Coordinate:
        // has part of ship, ship plus what section of the ship (ships span more than one coordinate)
    // Keep track of missed shots
        // what coordintes they missed at

// Gameboard Represnetations: 
    // 1d array
    // 2d array
exports.Ship = Ship;