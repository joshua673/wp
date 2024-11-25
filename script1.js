// Event 1: Click
document.getElementById('clickButton').addEventListener('click', () => {
    alert('Button clicked!');
});

// Event 2: Mouse Over
document.getElementById('hoverButton').addEventListener('mouseover', () => {
    hoverButton.textContent = 'Hovered!';
});

// Event 3: Key Down
document.getElementById('keyInput').addEventListener('keydown', (event) => {
    console.log('Key pressed:', event.key);
});

// Event 4: Double Click
document.getElementById('doubleClickButton').addEventListener('dblclick', () => {
    doubleClickButton.style.backgroundColor = 'lightgreen';
});

// Event 5: Change
document.getElementById('dropdown').addEventListener('change', (event) => {
    alert('You selected: ' + event.target.value);
});

// Event 6: Mouse Out
document.getElementById('colorBox').addEventListener('mouseout', () => {
    colorBox.style.backgroundColor = 'lightcoral';
});
