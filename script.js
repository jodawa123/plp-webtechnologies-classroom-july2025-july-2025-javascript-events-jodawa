const addDropdown = document.getElementById('go-add');
const playlist = document.getElementById('playlist');
const add = document.getElementById('addSongBtn');
const urlInput = document.getElementById('songURL');
const errorMessage = document.getElementById('errorMsg');
const formSection = document.querySelector('.form-section');

// Show form when ➕ button clicked
addDropdown.addEventListener('click', () => {
  formSection.style.display = 'block';
});

// Add song when Add Song button clicked
add.addEventListener('click', () => {
  const urlValue = urlInput.value;

  if (urlValue.trim() === '') {
    errorMessage.style.display = 'block';
    return;
  }

  errorMessage.style.display = 'none';

  const outerDiv = document.createElement('div');
  outerDiv.classList.add('song');

  const innerDiv = document.createElement('div');
  innerDiv.classList.add('song-card');

  const newLink = document.createElement('iframe');
  newLink.src = urlValue;
  newLink.frameBorder = "0";
  newLink.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
  newLink.loading = "lazy";

  const newLike = document.createElement('button');
  newLike.classList.add('like-btn');
  newLike.textContent = '❤️';

  innerDiv.appendChild(newLink);
  innerDiv.appendChild(newLike);
  outerDiv.appendChild(innerDiv);
  playlist.appendChild(outerDiv);

  urlInput.value = '';
});

