
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
      name: 'NhacViet_1',
      singer: 'Random',
      path: './assets/music/dedanhkhithucgiac.mp3',
      image: 'https://i.ytimg.com/vi/S6x-p6Vfyew/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLALf-xoSz-cYhbAdBt1ZwOWss2ISA',
    },
    {
      name: 'NhacViet_2',
      singer: 'Random',
      path: './assets/music/anhchieutan.mp3',
      image: 'https://i.ytimg.com/vi/wGuSYifX0qU/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhWIFooZTAP&rs=AOn4CLBWWoFRxlLzqTEi52uaJsoDACUgJQ',
    },
    {
      name: 'NhacViet_3',
      singer: 'Random',
      path: './assets/music/anhsaovabautroi.mp3',
      image: 'https://i.ytimg.com/vi/9vaLkYElidg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDVejAL9_Jm05vDr9CdtEC1lS7RdA',
    },
    {
      name: 'NhacViet_4',
      singer: 'Random',
      path: './assets/music/xindunglangim.mp3',
      image: 'https://i.ytimg.com/vi/ZzwnKmGN3kQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAT_CCg1lEmwmVIDJkbHlggvGGRgg',
    },
    {
      name: 'NhacViet_5',
      singer: 'Random',
      path: './assets/music/buonthicukhocdi.mp3',
      image: 'https://i.ytimg.com/vi/c_VAQ1Akldg/hq2.jpg?sqp=-oaymwE2COADEI4CSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhNIFcoZTAP&rs=AOn4CLAiPHrBk2LsdMkep2kI7BYbDvQQ_Q',
    },
    {
      name: 'NhacViet_6',
      singer: 'Random',
      path: './assets/music/BongHoaChangThuocVeTa.mp3',
      image: 'https://i.ytimg.com/vi/JgggA8Jtzyg/hqdefault.jpg?sqp=-oaymwE2COADEI4CSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBzgWAAtAFigIMCAAQARh_IEcoKzAP&rs=AOn4CLCkDRBjj2kRlFVf-TDUtc5SHQ9-MQ',
    },
    {
      name: 'NhacViet_7',
      singer: 'Random',
      path: './assets/music/TuEmMaRa.mp3',
      image: 'https://i.ytimg.com/vi/T-uHbucSVPk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAdBkReZ_3LvVhjuFZAslco0nxQgA',
    },
    {
      name: 'NhacViet_8',
      singer: 'Random',
      path: './assets/music/YeuTuDauMaRa.mp3',
      image: 'https://i.ytimg.com/vi/dJNuH01azLk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDsEDHhoq3Z64He1SIsYD43BuXqiw',
    },
    {
      name: 'NhacViet_9',
      singer: 'Random',
      path: './assets/music/100years.mp3',
      image: 'https://i.ytimg.com/vi/47ahoiV9qGY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIlWb_1iRz8bv_JGsju5O-vwfjcA',
    },
    {
      name: 'NhacViet_10',
      singer: 'Random',
      path: './assets/music/anh-da-quen-voi-co-don.mp3',
      image: 'https://i.ytimg.com/vi/X7sSE3yCNLI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDARYpA9u8IJxtzxwIur_SfnqxmtQ',
    },
    {
      name: 'NhacViet_11',
      singer: 'Random',
      path: './assets/music/dont-coi.mp3',
      image: 'https://i.ytimg.com/vi/1dlTWaiBZDw/hq2.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDtIuZaChLjAUvJ-HJoJZvfpS98IQ',
    },
    {
      name: 'NhacViet_12',
      singer: 'Random',
      path: './assets/music/ngay-mai-nguoi-ta-di-lay-chong.mp3',
      image: 'https://i.ytimg.com/vi/WL11bwvAYWI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD1YBiavvBM4GmH2qqgtoms6YWa7Q',
    },
    {
      name: 'EDM_1',
      singer: 'Random',
      path: './assets/music/SuperStar.mp3',
      image: 'https://i.ytimg.com/vi/qqWVsXag3Pw/hqdefault.jpg?sqp=-oaymwE2COADEI4CSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB9AmAAtAFigIMCAAQARhyIF8oOjAP&rs=AOn4CLDR8eGxjM1mTIlM1cZJEuIb_bEX0A',
    },
    {
      name: 'EDM_2',
      singer: 'Random',
      path: './assets/music/TrapQueen.mp3',
      image: 'https://i.ytimg.com/vi/a1xRIqFApvY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCMUTd7aNJl4Rv4QD2NRTkdbrhnFw',
    },
    {
      name: 'EDM_3',
      singer: 'Random',
      path: './assets/music/WaitingForLove.mp3',
      image: 'https://i.ytimg.com/vi/1z94Qrrh6vg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIdTKJzrVaBuf5mkoh5ujkYgKo-Q',
    },
    {
      name: 'EDM_4',
      singer: 'Random',
      path: './assets/music/WayBack.mp3',
      image: 'https://i.ytimg.com/vi/iDgoqe-v-io/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhBIGUoWDAP&rs=AOn4CLCLVNJghS1ttl7K_Wf-s5WOR5Umjw',
    },
    {
      name: 'EDM_5',
      singer: 'Random',
      path: './assets/music/WhereIsYourLove.mp3',
      image: 'https://i.ytimg.com/vi/rl-DR6bsNms/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARhPIEYocjAP&rs=AOn4CLBIoTzxQLBBnL_kRSXE2KorLxTf-w',
    },
    {
      name: 'EDM_6',
      singer: 'Random',
      path: './assets/music/slow-down.mp3',
      image: 'https://i.ytimg.com/vi/nfZNlK11Wos/0.jpg',
    },
    {
      name: 'Beat_1',
      singer: 'Random',
      path: './assets/music/semicircle.mp3',
      image: 'https://i.ytimg.com/vi/OM93EB9io9o/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDp0OytjVeqMdCpIv_OCxhyriBYtw',
    },
    {
      name: 'Beat_2',
      singer: 'Random',
      path: './assets/music/daylight.mp3',
      image: 'https://i.ytimg.com/vi/bH7FysX2JIY/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB9AmAAtAFigIMCAAQARgzID4ofzAP&rs=AOn4CLAX75U6E8y1z29ztNqfXAZmjDFEbg',
    },

    {
      name: 'Beat_3',
      singer: 'Random',
      path: './assets/music/July1.mp3',
      image: 'https://i.ytimg.com/vi/eys7qNddU4Y/hqdefault.jpg?sqp=-oaymwE2CPYBEIoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhRIEUocjAP&rs=AOn4CLC3ld6GJN2ujhJGr0F9sIRTVV2OVg',
    },
    {
      name: 'Beat_4',
      singer: 'Random',
      path: './assets/music/July2.mp3',
      image: 'https://i.ytimg.com/vi/-KIQdpnCztk/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIGEoMjAP&rs=AOn4CLCCuG6sNuaCmZMa9NJXuOmadErEzA',
    },
    {
      name: 'Beat_5',
      singer: 'Random',
      path: './assets/music/July3.mp3',
      image: 'https://i.ytimg.com/vi/c0i0oMYhQ2E/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAyBaQmonA8cQ6_6BqxbknS6VXe8w',
    },
    {
      name: 'Beat_6',
      singer: 'Random',
      path: './assets/music/giacmohoaanhdao.mp3',
      image: 'https://i.ytimg.com/vi/kiPBGodE8oo/0.jpg',
    },
    {
      name: 'NhacPhim_1',
      singer: 'Random',
      path: './assets/music/foxrain.mp3',
      image: 'https://i.ytimg.com/vi/eqK-yQNdvtA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpo3cRBUiGLATFCw9ldHxjsjBQVg',
    },
    {
      name: 'NhacPhim_2',
      singer: 'Random',
      path: './assets/music/TNTM1.mp3',
      image: 'https://bloganchoi.com/wp-content/uploads/2023/04/review-truong-nguyet-tan-minh-1-2.jpg',
    },
    {
      name: 'NhacPhim_3',
      singer: 'Random',
      path: './assets/music/TNTM2.mp3',
      image: 'https://bloganchoi.com/wp-content/uploads/2023/04/review-truong-nguyet-tan-minh-1-2.jpg',
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

