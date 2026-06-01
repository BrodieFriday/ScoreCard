// scorecard.js - Professional Refactored Version

let column1Sum = 0;
let column2Sum = 0;
let column3Sum = 0;
let subtotalSum = 0;
let finalSum = 0;

const measurements = [
    { label: "Length of Main Beam", left: "mainBeamLeft", right: "mainBeamRight", diff: "mainBeamDif" },
    { label: "G1 (First Point)", left: "G1Left", right: "G1Right", diff: "G1dif" },
    { label: "G2 (Second Point)", left: "G2Left", right: "G2Right", diff: "G2dif" },
    { label: "G3 (Third Point)", left: "G3Left", right: "G3Right", diff: "G3dif" },
    { label: "G4 (Fourth Point)", left: "G4Left", right: "G4Right", diff: "G4dif" },
    { label: "G5 (Fifth Point)", left: "G5Left", right: "G5Right", diff: "G5dif" },
    { label: "G6 (Sixth Point)", left: "G6Left", right: "G6Right", diff: "G6dif" },
    { label: "G7 (Seventh Point)", left: "G7Left", right: "G7Right", diff: "G7dif" },
    { label: "H1 (Burr to G1)", left: "H1Left", right: "H1Right", diff: "H1dif" },
    { label: "H2 (G1 to G2)", left: "H2Left", right: "H2Right", diff: "H2dif" },
    { label: "H3 (G2 to G3)", left: "H3Left", right: "H3Right", diff: "H3dif" },
    { label: "H4 (G3 to G4)", left: "H4Left", right: "H4Right", diff: "H4dif" }
];

function renderTable() {
    const tbody = document.getElementById('table-body');
    tbody.innerHTML = '';

    measurements.forEach(m => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${m.label}</strong></td>
            <td><input type="number" step="0.125" id="${m.left}" class="measurement-input"></td>
            <td><input type="number" step="0.125" id="${m.right}" class="measurement-input"></td>
            <td><input type="number" step="0.125" id="${m.diff}" readonly class="diff-input"></td>
        `;
        tbody.appendChild(row);
    });
}

// Auto-calculate differences
function setupAutoDiff() {
    document.addEventListener('input', (e) => {
        if (e.target.id.includes('Left') || e.target.id.includes('Right')) {
            const base = e.target.id.replace('Left', '').replace('Right', '');
            const leftVal = parseFloat(document.getElementById(base + 'Left')?.value) || 0;
            const rightVal = parseFloat(document.getElementById(base + 'Right')?.value) || 0;
            
            const diffEl = document.getElementById(base + 'Dif') || document.getElementById(base + 'dif');
            if (diffEl) diffEl.value = Math.abs(leftVal - rightVal).toFixed(3);
        }
    });
}

function calculateColumn1() {
    const ids = measurements.map(m => m.left);
    column1Sum = ids.reduce((sum, id) => sum + (parseFloat(document.getElementById(id)?.value) || 0), 0);
    document.getElementById('columnOne').value = column1Sum.toFixed(3);
}

function calculateColumn2() {
    const ids = measurements.map(m => m.right);
    column2Sum = ids.reduce((sum, id) => sum + (parseFloat(document.getElementById(id)?.value) || 0), 0);
    document.getElementById('columnTwo').value = column2Sum.toFixed(3);
}

function calculateColumn3() {
    const ids = measurements.map(m => m.diff);
    column3Sum = ids.reduce((sum, id) => sum + (parseFloat(document.getElementById(id)?.value) || 0), 0);
    document.getElementById('columnThree').value = column3Sum.toFixed(3);
}

function calculateSubtotal() {
    const spread = parseFloat(document.getElementById('spreadCredit').value) || 0;
    subtotalSum = spread + column1Sum + column2Sum;
    document.getElementById('subtotal').value = subtotalSum.toFixed(3);
}

function calculateFinal() {
    finalSum = subtotalSum - column3Sum;
    document.getElementById('finalScore').value = finalSum.toFixed(3);
}

function resetAll() {
    document.querySelectorAll('input[type="number"]').forEach(input => input.value = '');
    column1Sum = column2Sum = column3Sum = subtotalSum = finalSum = 0;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderTable();
    setupAutoDiff();
    
    document.getElementById('reset-btn').addEventListener('click', resetAll);
});
