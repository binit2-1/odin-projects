document.addEventListener('DOMContentLoaded', () => {
    
    const start =  document.querySelector('.start-game');
    const humanCheckbox = document.getElementById('Human');
    const computerCheckbox = document.getElementById('Computer');
    const dialog = document.querySelector('dialog');
    dialog.showModal();

    dialog.addEventListener('cancel', (event) => {
        event.preventDefault();
    });

    start.addEventListener('click', ()=>{
        const playerType = humanCheckbox.checked ? 'Human' : 'Computer';
        dialog.close();
        console.log(`Selected player type: ${playerType}`);
        if (playerType === 'Human'){
        document.querySelector('.vsHuman').textContent = 'YOU vs HUMAN';
        document.querySelector('.vsComputer').textContent = '';
        }

        else if (playerType === 'Computer'){
            document.querySelector('.vsComputer').textContent = 'YOU vs COMPUTER';
            document.querySelector('.vsHuman').textContent = '';
        }
    })
});