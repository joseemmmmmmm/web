
function playSong() {
  const audio = document.getElementById('song-audio');
  audio.play();
}

function openCard() {
  const card = document.querySelector('.card');
  const message = document.getElementById('message');
  
  card.classList.toggle('open');
  
  setTimeout(() => {
    message.style.opacity = '1';
  }, 500);
}


function showYoung() {
  const youngContainer = document.getElementById('young-container');
  youngContainer.style.display = 'flex';
}
