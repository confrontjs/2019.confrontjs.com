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
    { start: '09:45', end: '10:25', duration: '00:40', type: 'talk', details: talkBy('Tomasz Łakomy') },
    { start: '10:25', end: '10:55', duration: '00:30', type: 'talk', details: talkBy('Eleftheria Batsou') },
    { start: '10:55', end: '11:10', duration: '00:15', type: '', details: 'Coffee Break' },
    { start: '11:10', end: '11:50', duration: '00:40', type: 'talk', details: talkBy('Jemima Abu') },
    { start: '11:50', end: '12:20', duration: '00:30', type: 'talk', details: talkBy('Jerbi Saif') },
    { start: '12:20', end: '13:10', duration: '00:50', type: '', details: 'Lunch' },
    { start: '13:10', end: '13:40', duration: '00:30', type: 'talk', details: talkBy('Przemysław Zych') }, // Venue Sponsor
    { start: '13:40', end: '14:10', duration: '00:30', type: 'talk', details: talkBy('Wojciech Jureczka') }, // Gold Sponsor
    { start: '14:10', end: '14:25', duration: '00:15', type: '', details: 'Activity Break' },
    { start: '14:25', end: '14:55', duration: '00:30', type: 'talk', details: talkBy('Piotr Tomiak') },
    { start: '14:55', end: '15:25', duration: '00:30', type: 'talk', details: talkBy('Andrzej Mazur') },
    { start: '15:25', end: '15:40', duration: '00:15', type: '', details: 'Sponsors Break' },
    { start: '15:40', end: '15:45', duration: '00:05', type: 'talk-not-ready', details: talkBy('Bonus Lightning Talk') },
    { start: '15:45', end: '15:50', duration: '00:05', type: 'talk', details: talkBy('Yonatan Kra') },
    { start: '15:50', end: '15:55', duration: '00:05', type: 'talk-not-ready', details: talkBy('Free slot') },
    { start: '15:55', end: '16:00', duration: '00:05', type: 'talk', details: talkBy('Yonatan Doron') },
    { start: '16:00', end: '16:05', duration: '00:05', type: 'talk', details: talkBy('Elad Shechter') },
    { start: '16:05', end: '16:10', duration: '00:05', type: 'talk', details: talkBy('Jan Salwowski') },
    { start: '16:10', end: '16:15', duration: '00:05', type: 'talk', details: talkBy('Tymon Terlikiewicz') },
    { start: '16:15', end: '16:45', duration: '00:30', type: 'talk', details: talkBy('Roy Derks') },
    { start: '16:45', end: '17:15', duration: '00:30', type: 'talk-not-ready', details: talkBy('Gold Sponsor') },
    { start: '17:15', end: '17:55', duration: '00:40', type: 'talk', details: talkBy('Chris Heilmann') },
    { start: '17:55', end: '18:00', duration: '00:10', type: '', details: 'Final (Contest’s winner announcement)' },
];
