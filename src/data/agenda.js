const talks = require('./talks');

function talkBy(name) {
    return talks.find((item) => {
        return (item.speaker.name === name)
    });
}

module.exports = [
    { start: '08:00', end: '09:30', duration: '01:30', type: 'Registration Open' },
    { start: '09:30', end: '09:45', duration: '00:15', type: 'Opening by MC' },
    { start: '09:45', end: '10:25', duration: '00:40', type: 'Talk', details: talkBy('Tejas Kumar') },
    { start: '10:25', end: '10:55', duration: '00:30', type: 'Talk', details: talkBy('Eleftheria Batsou') },
    { start: '10:55', end: '11:10', duration: '00:15', type: 'Break (Coffee)' },
    { start: '11:10', end: '11:50', duration: '00:40', type: 'Talk', details: talkBy('Jemima Abu') },
    { start: '11:50', end: '12:20', duration: '00:30', type: 'Talk', details: talkBy('Jerbi Saif') },
    { start: '12:20', end: '13:10', duration: '00:50', type: 'Lunch' },
    { start: '13:10', end: '13:40', duration: '00:30', type: 'Talk', details: talkBy('Venue Speaker') },
    { start: '13:40', end: '14:10', duration: '00:30', type: 'Talk', details: talkBy('Gold Sponsor') },
    { start: '14:10', end: '14:25', duration: '00:15', type: 'Beak (Activity)' },
    { start: '14:25', end: '14:55', duration: '00:30', type: 'Talk', details: talkBy('Gold Sponsor 2') },
    { start: '14:55', end: '15:25', duration: '00:30', type: 'Talk', details: talkBy('Andrzej Mazur') },
    { start: '15:25', end: '15:40', duration: '00:15', type: 'Break (Sponsors)' },
    { start: '15:40', end: '15:55', duration: '00:15', type: 'Lighning Talks' },
    { start: '15:55', end: '16:25', duration: '00:30', type: 'Talk', details: talkBy('Roy Derks') },
    { start: '16:25', end: '16:55', duration: '00:30', type: 'Talk', details: talkBy('Rakhi Sharma') },
    { start: '16:55', end: '17:35', duration: '00:40', type: 'Talk', details: talkBy('Chris Heilmann') },
    { start: '17:35', end: '17:50', duration: '00:15', type: 'Closing Conference (Contest’s winner announcement)' },
];
