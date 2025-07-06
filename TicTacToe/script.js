document.addEventListener('DOMContentLoaded', () => {
    const dialog = document.querySelector('dialog');
    dialog.showModal();
    const start =  document.querySelector('.start-game');
    const humanCheckbox = document.getElementById('Human');
    const computerCheckbox = document.getElementById('Computer');

    dialog.addEventListener('cancel', (event) => {
        event.preventDefault();
    });

    start.addEventListener('click', ()=>{
        const playerType = humanCheckbox.checked ? 'Human' : 'Computer';
        dialog.close();
        console.log(`Selected player type: ${playerType}`);
    })
});