let playlist = [];
let currentIndex = 0;
let isPlaying = false;

const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const progressBar = document.getElementById('progressBar');
const progressFill = document.getElementById('progressFill');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const songTitle = document.getElementById('songTitle');
const songArtist = document.getElementById('songArtist');
const playlistEl = document.getElementById('playlist');
const volumeSlider = document.getElementById('volumeSlider');

fetch('playlist.json')
    .then(response => response.json())
    .then(data => {
        playlist = data;
        loadPlaylist();
        if (playlist.length > 0) {
            loadSong(0);
        }
    })
    .catch(error => {
        playlistEl.innerHTML = '<div class="loading">Error loading playlist</div>';
    });

function loadPlaylist() {
    playlistEl.innerHTML = '';
    playlist.forEach((song, index) => {
        const item = document.createElement('div');
        item.className = 'playlist-item';
        if (index === currentIndex) {
            item.classList.add('active');
        }
        item.innerHTML = `
            <div class="playlist-item-title">${song.title}</div>
            <div class="playlist-item-artist">${song.artist}</div>
        `;
        item.addEventListener('click', () => {
            loadSong(index);
            play();
        });
        playlistEl.appendChild(item);
    });
}

function loadSong(index) {
    currentIndex = index;
    const song = playlist[currentIndex];
    audio.src = song.file;
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    updatePlaylistUI();
}

function updatePlaylistUI() {
    const items = document.querySelectorAll('.playlist-item');
    items.forEach((item, index) => {
        if (index === currentIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

function play() {
    console.log('Attempting to play:', audio.src);
    audio.play()
        .then(() => {
            console.log('Playback started successfully');
            isPlaying = true;
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
        })
        .catch(error => {
            console.error('Playback error:', error);
            alert('Cannot play audio: ' + error.message);
        });
}

function pause() {
    audio.pause();
    isPlaying = false;
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
}

playBtn.addEventListener('click', () => {
    if (isPlaying) {
        pause();
    } else {
        play();
    }
});

prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = playlist.length - 1;
    }
    loadSong(currentIndex);
    if (isPlaying) {
        play();
    }
});

nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= playlist.length) {
        currentIndex = 0;
    }
    loadSong(currentIndex);
    if (isPlaying) {
        play();
    }
});

audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressFill.style.width = progress + '%';
    currentTimeEl.textContent = formatTime(audio.currentTime);
});

audio.addEventListener('loadedmetadata', () => {
    durationEl.textContent = formatTime(audio.duration);
});

audio.addEventListener('ended', () => {
    nextBtn.click();
});

progressBar.addEventListener('click', (e) => {
    const rect = progressBar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audio.currentTime = percent * audio.duration;
});

volumeSlider.addEventListener('input', (e) => {
    audio.volume = e.target.value / 100;
});

audio.volume = 0.7;

function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return mins + ':' + (secs < 10 ? '0' : '') + secs;
}
