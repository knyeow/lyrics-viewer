document.getElementById('lyrics-form').addEventListener('submit', async function (e) {
    e.preventDefault(); 
  
    const artist = document.getElementById('artist').value.trim();
    const song = document.getElementById('song').value.trim();
    const lyricsResult = document.getElementById('lyrics-result');
  
    if (artist === '' || song === '') {
      lyricsResult.innerHTML = '<p>Please fill in both fields.</p>';
      return;
    }
  
    try {
      const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
      const data = await response.json();
  
      if (data.lyrics) {
        lyricsResult.innerHTML = `<pre>${data.lyrics}</pre>`;
      } else {
        lyricsResult.innerHTML = `<p>Lyrics not found. Please try another song.</p>`;
      }
    } catch (error) {
      console.error('Error fetching lyrics:', error);
      lyricsResult.innerHTML = `<p>Something went wrong. Please try again later.</p>`;
    }
  });

