


  var switchMt09 = document.getElementById('switch-mt09');
  var switchDiablo = document.getElementById('switch-diablo');
  var imatge = document.getElementsByClassName('content-image')[0];

  switchMt09.addEventListener('click', function() {
    imatge.src = "img/mt09-fons.webp";
    switchMt09.style.backgroundColor = "#db3434";
    switchDiablo.style.backgroundColor = "transparent";
  });

  switchDiablo.addEventListener('click', function() {
    imatge.src = "img/diablo-antiga-fons.webp";
    switchMt09.style.backgroundColor = "transparent";
    switchDiablo.style.backgroundColor = "#db3434";
  });

  //Logo a dalt

  window.addEventListener('scroll', function() {
    var nav = document.getElementById('nav');
    var scrollY = window.scrollY || window.pageYOffset;
  
    if (scrollY >= 500) {
      nav.classList.add('visible');
      nav.classList.remove('invisible');
    } else {
      nav.classList.remove('visible');
      nav.classList.add('invisible');
    }
  });

  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');
  
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      videoId: 'PccBcNGrwcs',
      playerVars: 
          {
            'playsinline': 1,
            'autoplay': 1, 
            'controls': 0, 
            'playlist':['PccBcNGrwcs']
          },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange,
        'onEnded': onPlayerEnded
      }
    });
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    event.target.mute();      // Silenciar el video
    event.target.setLoop(true); // Activar el bucle
    event.target.playVideo();  // Iniciar la reproducción
  }

  function onPlayerEnded(event) {
    player.playVideo();
  }

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  var done = false;
  function onPlayerStateChange(event) {
    
  }
  function stopVideo() {
    player.stopVideo();
  }

  var audioButton = document.getElementById('audioButton');
  
    audioButton.addEventListener('click', function() {
      if (player.isMuted()) {
        player.unMute()
        this.innerHTML = 'MUTE AUDIO <i class="fa-solid fa-volume-xmark"></i>';
      } else {
        player.mute()
        this.innerHTML = 'PLAY AUDIO <i class="fa-solid fa-volume-high"></i>';
      }
    });
