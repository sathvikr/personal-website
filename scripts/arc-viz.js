var ARC_COLORS = [
    '#000000', '#0074D9', '#FF4136', '#2ECC40', '#FFDC00',
    '#AAAAAA', '#F012BE', '#FF851B', '#7FDBFF', '#870C25'
];

function renderGrid(grid) {
    var container = document.createElement('div');
    container.className = 'arc-grid';
    grid.forEach(function(row) {
        var rowEl = document.createElement('div');
        rowEl.className = 'arc-row';
        row.forEach(function(cell) {
            var cellEl = document.createElement('div');
            cellEl.className = 'arc-cell';
            cellEl.style.backgroundColor = ARC_COLORS[cell] || ARC_COLORS[0];
            rowEl.appendChild(cellEl);
        });
        container.appendChild(rowEl);
    });
    return container;
}

function renderExample(containerId, input, output, exNum) {
    var container = document.getElementById(containerId);
    if (!container) return;
    var rows = input.length;
    var cols = input[0].length;

    var header = document.createElement('div');
    header.className = 'arc-header';
    header.innerHTML = '<span>Ex.' + exNum + ' Input</span><span>(' + cols + 'x' + rows + ')</span><span>Ex.' + exNum + ' Output</span><span>(' + cols + 'x' + rows + ')</span>';
    container.appendChild(header);

    var pair = document.createElement('div');
    pair.className = 'arc-pair';
    pair.appendChild(renderGrid(input));
    var arrow = document.createElement('span');
    arrow.className = 'arc-arrow';
    arrow.textContent = '\u2192';
    pair.appendChild(arrow);
    pair.appendChild(renderGrid(output));
    container.appendChild(pair);
}

function initArcViz() {
    if (!document.querySelector('.arc-example')) return;
    fetch('https://raw.githubusercontent.com/fchollet/ARC-AGI/master/data/training/3e980e27.json')
        .then(function(r) { return r.json(); })
        .then(function(data) {
            [0, 1, 2, 3].forEach(function(idx, i) {
                if (data.train[idx]) {
                    renderExample('arc-ex-' + i, data.train[idx].input, data.train[idx].output, idx + 1);
                }
            });
        })
        .catch(function(err) { console.error('Failed to load ARC task:', err); });
}

initArcViz();
