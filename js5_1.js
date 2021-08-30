'use strict';

const chessBoard = {

    tableElement: document.getElementById('board'),
    rowsNames: ['8', '7', '6', '5', '4', '3', '2', '1'],
    colsNames: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    currentColor: 'BLACK', // текущий цвет ячейки
    rowColor: 'BLACK', // цвет строки

    init() {
        this.renderBoard();
    },

    renderBoard() {
        this.tableElement.classList.add('table');
        for (let row = 0; row < 9; row++) {
            const tr = document.createElement('tr');
            this.tableElement.appendChild(tr);
            this.toggleRowColor(row);

            for (let col = 0; col < 9; col++) {
                const td = document.createElement('td');
                tr.appendChild(td);
                this.setRowAndColName(row, col, td);
                this.setColColor(row, col, td);

            };
            console.log(document.querySelectorAll);
        };
    },
    //переключатель цвета строки
    toggleRowColor(row) {
        if (row > 0) {
            this.rowColor === 'BLACK' ? this.rowColor = 'WHITE' : this.rowColor = 'BLACK';
            this.currentColor === 'BLACK' ? this.currentColor = 'WHITE' : this.currentColor = 'BLACK';
        };
    },

    setRowAndColName(row, col, td) {
        if (row === 0 && col > 0) {
            td.classList.add('squareRowsColsNames');
            td.textContent = this.colsNames[col - 1];
        };
        if (col === 0) {
            td.classList.add('squareRowsColsNames');
            td.textContent = this.rowsNames[row - 1];
        }
    },

    setColColor(row, col, td) {
        if (row > 0 && col > 0) {
            td.classList.add('square');
            if (this.currentColor === 'BLACK')
                td.style.backgroundColor = 'black';
            this.currentColor === 'BLACK' ? this.currentColor = 'WHITE' : this.currentColor = 'BLACK';
        };
    },


};

chessBoard.init();