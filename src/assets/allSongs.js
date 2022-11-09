import song1 from '../images/song1.png';
import song2 from '../images/song2.png';
import song3 from '../images/song3.png';
import song4 from '../images/song4.png';
import song5 from '../images/song5.png';
import wetin from '../images/wetin.jpg';
import loaded from '../images/loaded.jpg';
import abule from '../images/abule.jpg';
import bbo from '../images/bbo.jpg';
import betty from '../images/betty-butter.jpg';
import cough from '../images/cough.jpg';
import duduke from '../images/duduke.jpg';
import swear from '../images/i-swear.jpg';
import mal from '../images/money-love.jpg';
import woman from '../images/woman.jpg';
import organize from '../images/organize.jpg';
import xtra from '../images/xtra-cool.jpeg';
import mj from '../images/mj.jpeg';
import call from '../images/call.jpeg';
import biu from '../images/back-in-uni.jpeg';
import fmh from '../images/fmh.jpg';
import essence from '../images/essence.jpg';
import philo from '../images/philo.jpeg';
import rush from '../images/rush.jpg';


const allSongs = [
    {
        id: 1,
        image: fmh,
        title: 'For my hand',
        artiste: 'Burna Boy ft. Ed sheeran',
        type: 'Single',
        duration: '2:44',
        url: 'https://cdn.trendybeatz.com/audio/Burna-Boy-Ft-Ed-Sheeran-For-My-Hand-New-Song-(TrendyBeatz.com).mp3',
        charts: ['Tomorrow tunes', 'Golden age of 80s'],
        progress: 0
    },
    {
        id: 2,
        image: essence,
        title: 'Essence',
        artiste: 'WizKid ft. Tems',
        type: 'Single',
        duration: '4:09',
        url: 'https://cdn.trendybeatz.com/audio/Tems-Ft-Wizkid-Essence-[TrendyBeatz.com].mp3',
        charts: ['Tomorrow tunes', 'Burna Boy essentials'],
        progress: 0
    },
    {
        id: 3,
        image: philo,
        title: 'Philo',
        artiste: 'Bella Shmurda ft. Omah Lay',
        type: 'Single',
        duration: '2:44',
        url: 'https://cdn.trendybeatz.com/audio/Bella-Shmurda-Ft-Omah-Lay-Philo-(TrendyBeatz.com).mp3',
        charts: ['Burna Boy essentials', 'Golden age of 80s'],
        progress: 0
    },
    {
        id: 4,
        image: rush,
        title: 'Rush',
        artiste: 'Ayra Starr',
        type: 'Single',
        duration: '2:44',
        url: 'https://cdn.trendybeatz.com/audio/Ayra-Starr-Rush-(TrendyBeatz.com).mp3',
        charts: ['Tomorrow tunes'],
        progress: 0
    },
    {
        id: 5,
        image: organize,
        title: 'Joha',
        artiste: 'Asake',
        type: 'Single',
        duration: '2:44',
        url: 'https://cdn.trendybeatz.com/audio/Asake-Joha-(TrendyBeatz.com).mp3',
        charts: ['Golden age of 80s'],
        progress: 0
    },
    {
        id: 6,
        image: xtra,
        title: 'Xtra Cool',
        artiste: 'Young Jonn',
        type: 'Single',
        duration: '2:30',
        url: 'https://cdn.trendybeatz.com/audio/Young-Jonn-Xtra-Cool-(TrendyBeatz.com).mp3',
        charts: ['Burna Boy essentials'],
        progress: 0
    },
    {
        id: 7,
        image: biu,
        title: 'Back in Uni',
        artiste: 'Blaqbonez',
        type: 'Single',
        duration: '2:32',
        url: 'https://cdn.trendybeatz.com/audio/Blaqbonez-Ft-Jae5-Back-In-Uni-(TrendyBeatz.com).mp3',
        charts: ['Golden age of 80s', 'Tomorrow tunes', 'Burna Boy essentials'],
        progress: 0
    },
    {
        id: 8,
        image: cough,
        title: 'Cough',
        artiste: 'Kizz Daniel',
        type: 'Single',
        duration: '2:56',
        url: 'https://cdn.trendybeatz.com/audio/Kizz-Daniel-Cough-Odo-(TrendyBeatz.com).mp3',
        charts: ['Tomorrow tunes', 'Golden age of 80s'],
        progress: 0
    },
    {
        id: 9,
        image: swear,
        title: 'I Swear',
        artiste: 'Guchi ft. Yemi Alade',
        type: 'Single',
        duration: '2:18',
        url: 'https://cdn.trendybeatz.com/audio/Guchi-Ft-Yemi-Alade-I-Swear-(TrendyBeatz.com).mp3',
        charts: ['Burna Boy essentials', 'Golden age of 80s'],
        progress: 0
    },
    {
        id: 10,
        image: bbo,
        title: 'BBO',
        artiste: 'Phyno',
        type: 'Single',
        duration: '2:45',
        url: 'https://cdn.trendybeatz.com/audio/Phyno-BBO-Bad-Bxtches-Only-(TrendyBeatz.com).mp3',
        charts: ['Tomorrow tunes', 'Burna Boy essentials'],
        progress: 0
    },
    {
        id: 11,
        image: loaded,
        title: 'Loaded',
        artiste: 'Tiwa Savage ft. Asake',
        type: 'Single',
        duration: '2:37',
        url: 'https://cdn.trendybeatz.com/audio/Asake-Ft-Tiwa-Savage-Loaded-(TrendyBeatz.com).mp3',
        charts: ['Tomorrow tunes', 'Golden age of 80s'],
        progress: 0
    },
    {
        id: 12,
        image: abule,
        title: 'Abule',
        artiste: 'Patoranking',
        type: 'Single',
        duration: '3:20',
        url: 'https://cdn.trendybeatz.com/audio/Patoranking-Abule.mp3',
        charts: ['Burna Boy essentials', 'Golden age of 80s'],
        progress: 0
    },
    {
        id: 13,
        image: betty,
        title: 'Betty Butter',
        artiste: 'Mayorkun ft. Davido',
        type: 'Single',
        duration: '2:09',
        url: 'https://cdn.trendybeatz.com/audio/Mayorkun-Ft-Davido-Betty-Butter.mp3',
        charts: ['Tomorrow tunes', 'Burna Boy essentials'],
        progress: 0
    },
    {
        id: 14,
        image: mal,
        title: 'Money and Love',
        artiste: 'Wizkid',
        type: 'Single',
        duration: '3:11',
        url: 'https://cdn.trendybeatz.com/audio/Wizkid-Money-And-Love-(TrendyBeatz.com).mp3',
        charts: ['Golden age of 80s'],
        progress: 0
    },
    {
        id: 15,
        image: call,
        title: 'Call',
        artiste: 'Joe Boy',
        type: 'Single',
        duration: '2:45',
        url: 'https://cdn.trendybeatz.com/audio/Joeboy-Call-[TrendyBeatz.com].mp3',
        charts: ['Golden age of 80s', 'Tomorrow tunes', 'Burna Boy essentials'],
        progress: 0
    },
    {
        id: 16,
        image: duduke,
        title: 'Duduke',
        artiste: 'Simi',
        type: 'Single',
        duration: '2:52',
        url: 'https://cdn.trendybeatz.com/audio/Simi-Duduke-[TrendyBeatz.com].mp3',
        charts: ['Burna Boy essentials'],
        progress: 0
    },
    {
        id: 17,
        image: mj,
        title: 'MJ',
        artiste: 'Bad Boy Timz',
        type: 'Single',
        duration: '2:38',
        url: 'https://cdn.trendybeatz.com/audio/BadboyTimz-MJ-1-(TrendyBeatz.com).mp3',
        charts: ['Tomorrow tunes', 'Burna Boy essentials'],
        progress: 0
    },
    {
        id: 18,
        image: woman,
        title: 'Woman',
        artiste: 'Rema',
        type: 'Single',
        duration: '3:54',
        url: 'https://cdn.trendybeatz.com/audio/Rema-Woman.mp3',
        charts: ['Tomorrow tunes'],
        progress: 0
    },
    {
        id: 19,
        image: organize,
        title: 'Organize',
        artiste: 'Asake',
        type: 'Single',
        duration: '2:04',
        url: 'https://cdn.trendybeatz.com/audio/Asake-Organise-(TrendyBeatz.com).mp3',
        charts: ['Tomorrow tunes', 'Burna Boy essentials'],
        progress: 0
    },
    {
        id: 20,
        image: wetin,
        title: 'Wetin Dey Sup',
        artiste: 'Burna Boy',
        type: 'Single',
        duration: '3:40',
        url: 'https://cdn.trendybeatz.com/audio/Burna-Boy-Wetin-Dey-Sup.mp3',
        charts: ['Tomorrow tunes', 'Golden age of 80s'],
        progress: 0
    },
];

export default allSongs;
