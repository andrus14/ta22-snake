class GameBoard {
    
    gameBoardTable = document.getElementById('game-board');
    boardSize;

    constructor ( boardSize ) {
        this.boardSize = boardSize;
    }

    draw ( snakeCoordinates, food ) {

        this.gameBoardTable.innerHTML = '';

        for ( let i = 0; i < this.boardSize; i++ ) {

            const rowTr = document.createElement('tr');

            for ( let j = 0; j < this.boardSize; j++ ) {

                const cellTd = document.createElement('td');
                const id = i + '-' + j;
                cellTd.setAttribute('id', id);
                
                if ( snakeCoordinates.includes(id) ) {
                    cellTd.classList.add('snake');
                }
                
                const foodCoordinates = food.y + '-' + food.x;
                if ( id == foodCoordinates ) {
                    cellTd.classList.add('food');
                }
                
                rowTr.append(cellTd);
            
            }

            this.gameBoardTable.append(rowTr);
        }
    }

}

export { GameBoard }