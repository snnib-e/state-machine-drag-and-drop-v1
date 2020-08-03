console.clear();
const allDayElements = document.querySelectorAll('[data-day]');

// idle
// -> onPointerDown
// dragging
// -> onPointerMove
// <- onPointerUp

const data = {
    startDate: null,
    endDate: null
};

const machine = {
    initial: 'idle',
    states: {
        idle: {
            on: {
                pointerdown: 'dragging',
            },
        },
        dragging: {
            on: {
                pointerover: 'dragging',
                pointerup: 'idle',
                pointercancel: 'idle',
            },
        },
    },
};

//idle
let currentState = machine.initial;

function send(event) {
    currentState = machine
        .states[currentState]
        .on[event.type] || currentState;

    console.log(event.type, currentState);
}

allDayElements.forEach(dayEl => {
    dayEl.addEventListener('pointerdown', send);
    dayEl.addEventListener('pointerover', send);
    dayEl.addEventListener('pointerup', send);
});
