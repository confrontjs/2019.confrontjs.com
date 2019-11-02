const talks = require('./talks');

function talkBy(name) {
    const talk = talks.find((item) => {
        return (item.speaker.name === name)
    });

    if (talk) {
        return talk;
    }

    return name;
}

module.exports = [
    { start: '08:00', end: '09:30', duration: '01:30', type: '', details: 'Registration' },
    { start: '09:30', end: '09:45', duration: '00:15', type: '', details: 'Opening by MC' },
    { start: '09:45', end: '10:25', duration: '00:40', type: 'talk', details: talkBy('Tejas Kumar') },
    { start: '10:25', end: '10:55', duration: '00:30', type: 'talk', details: talkBy('Eleftheria Batsou') },
    { start: '10:55', end: '11:10', duration: '00:15', type: '', details: 'Coffee Break' },
    { start: '11:10', end: '11:50', duration: '00:40', type: 'talk', details: talkBy('Jemima Abu') },
    { start: '11:50', end: '12:20', duration: '00:30', type: 'talk', details: talkBy('Jerbi Saif') },
    { start: '12:20', end: '13:10', duration: '00:50', type: '', details: 'Lunch' },
    { start: '13:10', end: '13:40', duration: '00:30', type: 'talk-not-ready', details: talkBy('Venue Speaker') },
    { start: '13:40', end: '14:10', duration: '00:30', type: 'talk-not-ready', details: talkBy('Gold Sponsor Speaker') },
    { start: '14:10', end: '14:25', duration: '00:15', type: '', details: 'Activity Break' },
    { start: '14:25', end: '14:55', duration: '00:30', type: 'talk-not-ready', details: talkBy('Gold Sponsor 2 Speaker') },
    { start: '14:55', end: '15:25', duration: '00:30', type: 'talk', details: talkBy('Andrzej Mazur') },
    { start: '15:25', end: '15:40', duration: '00:15', type: '', details: 'Sponsors Break' },
    { start: '15:40', end: '15:45', duration: '00:05', type: 'talk', details: talkBy('Yonatan Kra') },
    { start: '15:45', end: '15:50', duration: '00:05', type: 'talk', details: talkBy('Sarath Damaraju') },
    { start: '15:50', end: '15:55', duration: '00:05', type: 'talk', details: talkBy('Jonathan Doron') },
    { start: '15:55', end: '16:25', duration: '00:30', type: 'talk', details: talkBy('Roy Derks') },
    { start: '16:25', end: '16:55', duration: '00:30', type: 'talk', details: talkBy('Rakhi Sharma') },
    { start: '16:55', end: '17:35', duration: '00:40', type: 'talk', details: talkBy('Chris Heilmann') },
    { start: '17:35', end: '17:50', duration: '00:15', type: '', details: 'Final (Contest’s winner announcement)' },
];
