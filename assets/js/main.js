
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const Player_Store_Key = "Store"

const player = $(".player")
const cd = $(".cd")
const heading = $("header marquee")
const cdThumb = $(".cd-thumb")
const audio = $("#audio")
const playBtn = $(".btn-toggle-play")
const progress = $("#progress")
const prevBtn = $(".btn-prev")
const nextBtn = $(".btn-next")
const randomBtn = $(".btn-random")
const repeatBtn = $(".btn-repeat")
const playlist = $(".playlist")
const option = $(".option")
const progressduration = $(".progress__duration")
const progresscurrent = $(".progress__current")
audio.volume = 1;

const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  config: {},
  // (1/2) line below to use localStorage
  // config: JSON.parse(localStorage.getItem(Play_Store_Key)) || {} ,
  setConfig: function (key, value) {
    this.config[key] = value
    // (2/2) Uncomment the line below to use localStorage
    // localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config));
  },
  songs: [
    {
      name: 'Để dành khi thức giấc',
      singer: 'Thể loại: Nhạc Việt (SIVAN)',
      path: './assets/music/1.mp3',
      image: 'https://i.ytimg.com/vi/S6x-p6Vfyew/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLALf-xoSz-cYhbAdBt1ZwOWss2ISA',
    },
    {
      name: 'Cũng đành thôi',
      singer: 'Thể loại: Nhạc Việt (Đức Phúc)',
      path: './assets/music/2.mp3',
      image: 'https://i.ytimg.com/vi/Qs-XcmaxaLw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDY4uhNK3on1fSUHHHWuPqYPqtoGA',
    },
    {
      name: 'Phía sau một cô gái',
      singer: 'Thể loại: Nhạc Việt (Soobin Hoàng Sơn)',
      path: './assets/music/4.mp3',
      image: 'https://i.ytimg.com/vi/j__Q13iAxNk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYvgC8n9HOxGNKJKjHhYBP18tcYQ',
    },
    {
      name: 'Khi người lớn cô đơn',
      singer: 'Thể loại: Nhạc Việt (Phạm Hồng Phước)',
      path: './assets/music/5.mp3',
      image: 'https://i.ytimg.com/vi/sU2V9ZSNqQE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyxhFei6nAICTyRyvTn-Ffj3QL4A',
    },
    {
      name: 'Giá như có thể ôm ai và khóc',
      singer: 'Thể loại: Nhạc Việt (Phạm Hồng Phước)',
      path: './assets/music/6.mp3',
      image: 'https://i.ytimg.com/vi/xTl9dRnactg/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBYpWJrvgq_Zs-ACRIb9fbVltSI4A',
    },
    {
      name: '多情種  胡楊林今生已不再...',
      singer: 'Thể loại: China music',
      path: './assets/music/3.mp3',
      image: 'https://i.ytimg.com/vi/VV6SiG3S2K8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJ1sY9pa3WyU4-3fIq7e4FFeY6pg',
    },
    // {
    //   name: '',
    //   singer: '',
    //   path: './',
    //   image: './',
    // },
    // {
    //   name: '',
    //   singer: '',
    //   path: './',
    //   image: './',
    // },
    // {
    //   name: '',
    //   singer: '',
    //   path: './',
    //   image: './',
    // },
    // {
    //   name: '',
    //   singer: '',
    //   path: './',
    //   image: './',
    // },
  ],
  render: function () {
    const htmls = this.songs.map((song, index) => {
      return `
              <div class="song ${index === this.currentIndex ? "active" : ""}" data-index="${index}">
                  <div class="thumb"
                      style="background-image: url('${song.image}')">
                  </div>
                  <div class="body">
                      <h3 class="title">${song.name}</h3>
                      <p class="author">${song.singer}</p>
                  </div>
                  <div class="option" style="display:none">
                      <i class="fas fa-ellipsis-h"></i>
                      <ul class="option-list">
                        <li class="option-item">
                          yêu thích
                        </li>
                        <li class="option-item">
                          Chia Sẻ
                        </li>
                        <li class="option-item">
                          Lời bài hát
                        </li>
                      </ul>
                  </div>
              </div>
          `;
    })
    playlist.innerHTML = htmls.join("")
  },
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex]
      }
    })
  },
  handleEvents: function () {
    const _this = this
    const cdWidth = cd.offsetWidth
    //xử lý CD quay
    const cdThumAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
      duration: 10000,
      iterations: Infinity
    })
    cdThumAnimate.pause()
    //xử lý phóng to / thu nhỏ  CD
    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const newCdWidth = cdWidth - scrollTop

      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0
      cd.style.opacity = newCdWidth / cdWidth
    }
    //xử lý khi click play
    playBtn.onclick = function () {
      if (_this.isPlaying) {
        audio.pause()
      } else {
        audio.play()
      }
    }
    //xử lý khi bài hát được play
    audio.onplay = function () {
      _this.isPlaying = true
      player.classList.add("playing")
      cdThumAnimate.play()
    }
    //xử lý khi bài hát bị pause
    audio.onpause = function () {
      _this.isPlaying = false
      player.classList.remove("playing")
      cdThumAnimate.pause()
    }

    // Khi tiến độ bài hát thay đổi
    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercent = Math.floor((audio.currentTime / audio.duration) * 100);
        progress.value = progressPercent;
      }
      _this.timeCurrent()
      _this.timeDuration()
    }

    // Xử lý khi tua song
    progress.oninput = function (e) {
      const seekTime = (audio.duration / 100) * e.target.value;
      audio.currentTime = seekTime;
    };
    //xử lý khi next bài hát
    nextBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong()
      } else {
        _this.nextSong()
      }
      audio.play()
      _this.render()
      _this.scrollToActiveSong()
    }
    //xử lý khi prev bài hát
    prevBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong()
      } else {
        _this.prevSong()
      }
      audio.play()
      _this.render();
      _this.scrollToActiveSong()
    }
    //xử lý khi bật/tắt random bài hát
    randomBtn.onclick = function () {
      _this.isRandom = !_this.isRandom
      _this.setConfig("isRandom", _this.isRandom)
      randomBtn.classList.toggle("active", _this.isRandom)
    }
    //xử lý khi lặp lại một bài hát
    repeatBtn.onclick = function () {
      _this.isRepeat = !_this.isRepeat
      _this.setConfig("isRepeat", _this.isRepeat)
      repeatBtn.classList.toggle("active", _this.isReapt)
    }
    //xử lý next bài hát khi audio ended
    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play()
      } else {
        nextBtn.click()
      }
    }
    // lắng nghe hành vi click vào playlist
    playlist.onclick = function (e) {
      const songNode = e.target.closest(".song:not(.active)")

      if (songNode || e.target.closest(".option")) {
        //xử lý khi click vào bài hát
        if (songNode) {
          _this.currentIndex = Number(songNode.dataset.index)
          _this.loadCurrentSong()
          _this.render();
          audio.play()
        }
        //xử lý khi click vào option bài hát
        if (e.target.closest(".option")) {
          //chưa code
          document.querySelector(".option").addEventListener("click", function () {
            document.querySelector(".option").style.display = "block"
          })
        }
      }
    }
  },
  scrollToActiveSong: function () {
    setTimeout(() => {
      if (this.currentIndex <= 2) {
        $('.song.active').scrollIntoView({
          behavior: 'smooth',
          block: 'end',
        });
      } else {
        $('.song.active').scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }, 300)
  },
  loadCurrentSong: function () {
    heading.textContent = this.currentSong.name
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
    audio.src = this.currentSong.path
  },
  loadConfig: function () {
    this.isRandom = this.config.isRandom
    this.isReapet = this.config.isRepeat
  },
  nextSong: function () {
    this.currentIndex++
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0
    }
    this.loadCurrentSong()
  },
  prevSong: function () {
    this.currentIndex--
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1
    }
    this.loadCurrentSong()
  },
  playRandomSong: function () {
    let newIndex
    do {
      newIndex = Math.floor(Math.random() * this.songs.length)
    }
    while (newIndex === this.currentIndex)
    this.currentIndex = newIndex
    this.loadCurrentSong()
  },
  formatTime: function (sec_num) {
    let hours = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - hours * 3600) / 60);
    let seconds = Math.floor(sec_num - hours * 3600 - minutes * 60);

    hours = hours < 10 ? (hours > 0 ? '0' + hours : 0) : hours;

    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    return (hours !== 0 ? hours + ':' : '') + minutes + ':' + seconds;
  },
  // hiển thị thời gian bài hát hiện tại
  timeCurrent: function () {
    setInterval(() => {
      let cur = this.formatTime(audio.currentTime)
      progresscurrent.textContent = `${cur}`;
    }, 100)
  },
  //hiển thị thời gian bài hát
  timeDuration: function () {
    if (audio.duration) {
      let dur = this.formatTime(audio.duration)
      progressduration.textContent = `${dur}`;
    }
  },
  start: function () {
    //gán cấu hình từ config vào ứng dụng
    this.loadConfig()
    //định nghĩa các thuộc tính cho 
    this.defineProperties()
    //lắng nghe/ xử lý các sự kiệm (DOM events)
    this.handleEvents()
    //tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
    this.loadCurrentSong()
    // render playlist
    this.render()
    // hiển thị trạng thái ban đầu của button repeat và random
    // randomBtn.classList.toggle("active", this.isRandom)
    // repeatBtn.classList.toggle("active", this.isRepeat)
  },
}

app.start();

