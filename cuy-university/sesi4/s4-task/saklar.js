// Lamp Switching System - CUYUNIVERSITY Sesi 4

// Room configurations
const rooms = {
    1: { name: 'Ruangan Keluarga', lamps: [1, 2, 3], color: 'red' },
    2: { name: 'Ruangan Makan', lamps: [4], color: 'orange' },
    3: { name: 'Ruangan Tidur', lamps: [5, 6], color: 'blue' },
    4: { name: 'Ruangan Tamu', lamps: [7, 8, 9, 10], color: 'purple' }
};

// Toggle individual lamp
function toggleLamp(lampNumber) {
    const lamp = document.getElementById(`lamp${lampNumber}`);
    const switchEl = document.getElementById(`switch${lampNumber}`);

    if (!lamp || !switchEl) return;

    const isOn = switchEl.classList.contains('active');

    if (isOn) {
        // Turn off
        lamp.src = 'aset/off1.gif';
        lamp.classList.remove('lamp-on');
        lamp.classList.add('lamp-off');
        switchEl.classList.remove('active');
    } else {
        // Turn on
        lamp.src = 'aset/on1.gif';
        lamp.classList.remove('lamp-off');
        lamp.classList.add('lamp-on');
        switchEl.classList.add('active');
    }
}

// Toggle all lamps in a group/room
function toggleGroup(roomNumber, turnOn) {
    const room = rooms[roomNumber];
    if (!room) return;

    room.lamps.forEach(lampNumber => {
        const lamp = document.getElementById(`lamp${lampNumber}`);
        const switchEl = document.getElementById(`switch${lampNumber}`);

        if (!lamp || !switchEl) return;

        if (turnOn) {
            // Turn on
            lamp.src = 'aset/on1.gif';
            lamp.classList.remove('lamp-off');
            lamp.classList.add('lamp-on');
            switchEl.classList.add('active');
        } else {
            // Turn off
            lamp.src = 'aset/off1.gif';
            lamp.classList.remove('lamp-on');
            lamp.classList.add('lamp-off');
            switchEl.classList.remove('active');
        }
    });
}

// Initialize all lamps to off state on page load
document.addEventListener('DOMContentLoaded', () => {
    // All lamps start off
    for (let i = 1; i <= 10; i++) {
        const lamp = document.getElementById(`lamp${i}`);
        const switchEl = document.getElementById(`switch${i}`);

        if (lamp) {
            lamp.src = 'aset/off1.gif';
            lamp.classList.add('lamp-off');
            lamp.classList.remove('lamp-on');
        }
        if (switchEl) {
            switchEl.classList.remove('active');
        }
    }
});