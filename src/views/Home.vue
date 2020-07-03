<style>

.shape {
background: linear-gradient(45deg, var(--primary) 0%, var(--secondary) 100%);
  animation: morph 8s ease-in-out infinite;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  height: 400px;
  transition: all 1s ease-in-out;
  width: 400px;
  z-index: 5;
  position:relative;
  left: 50%;
  transform: translatex(-50%);
  overflow: hidden;
}

.shape::before{
  content: "";
        position: absolute;
        top: -100%;
        left: -100%;
        bottom: -100%;
        right: -100%;
        background: linear-gradient(45deg,  #88D5BF 0%, #5D6BF8 50%, #e27fcb 100%);
        background-size: 100% 100%;
        animation: bgposition 20s infinite linear alternate;
        z-index: -1;
}

.shape>h2:first-child {
  font-size: 5rem;
  padding-top: 28%;
}

@keyframes bgposition {
    0% {
        transform: translate(30%, 30%);
    }
    25% {
        transform: translate(30%, -30%);
    }
    50% {
        transform: translate(-30%, -30%);
    }
    75% {
        transform: translate(-30%, 30%);
    }
    100% {
        transform: translate(30%, 30%);
    }
}

@keyframes morph {
  0% {
      border-radius:  60% 40% 30% 70% / 60% 30% 70% 40%;
      /* background: linear-gradient(45deg, var(--primary) 0%, var(--secondary) 100%);
      background-position: 100% 0;
      animation: bgSize 5s infinite ease-in-out alternate; */

  }

  50% {
      border-radius:  30% 60% 70% 40% / 50% 60% 30% 60%;
      /* background: linear-gradient(45deg, var(--secondary) 0%, var(--primary) 100%);
      background-position: 100% 0;
      animation: bgSize 5s infinite ease-in-out alternate; */

  }

  100% {
    border-radius:  60% 40% 30% 70% / 60% 30% 70% 40%;
    /* background: linear-gradient(45deg, var(--primary) 0%, var(--secondary) 100%);
    background-position: 100% 0;
    animation: bgSize 5s infinite ease-in-out alternate; */

}
}
</style>

<template lang="pug">
  #home.text-center
    h1 番茄鐘
    hr.bg-white
    .shape
      h2 {{ currentText }}
      h2#time {{ timetext }}
      h1
        font-awesome-icon(:icon="['fas', 'pause']" @click="pause" v-if="status === 'counting'")
        font-awesome-icon(:icon="['fas', 'play']" @click="start" v-else)
        | &emsp;
        font-awesome-icon(:icon="['fas', 'step-forward']" @click="finish(true)" v-if="status !== ''")
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      timer: 0,
      status: ''
    }
  },
  computed: {
    timetext () {
      const m = Math.floor(this.timeleft / 60)
      const s = Math.floor(this.timeleft % 60)
      return `${m} : ${s}`
    },
    currentText () {
      return this.current.length > 0 ? this.current : this.todos.length > 0 ? '點擊開始' : '沒有事項'
    },
    current () {
      return this.$store.getters.current
    },
    timeleft: {
      get () {
        return this.$store.getters.timeleft
      },
      set (value) {
        this.$store.commit('setTimeleft', value)
      }
    },
    todos () {
      return this.$store.getters.todos
    },
    alarmSelected () {
      return this.$store.getters.alarmSelected
    },
    isbreak () {
      return this.$store.getters.isbreak
    }
  },
  methods: {
    start () {
      if (this.status === 'pause') {
        this.status = 'counting'
        this.timer = setInterval(() => {
          this.timeleft--
          if (this.timeleft < 0) {
            this.finish(false)
          }
        }, 1000)
      } else {
        if (this.todos.length > 0 || this.current.length > 0) {
          this.$store.commit('start')
          this.status = 'counting'
          this.timer = setInterval(() => {
            this.timeleft--
            if (this.timeleft < 0) {
              this.finish(false)
            }
          }, 1000)
        }
      }
    },
    finish (skip) {
      clearInterval(this.timer)
      this.status = ''
      this.$store.commit('finish')
      if (!skip) {
        const audio = new Audio()
        audio.src = this.alarmSelected
        audio.play()
      }
      if (this.todos.length > 0) {
        this.start()
      } else {
        this.$swal({
          icon: 'success',
          title: '結束',
          buttonsStyling: false,
          customClass: {
            confirmButton: 'btn btn-success mx-1',
            cancelButton: 'btn btn-danger mx-1'
          }
        })
      }
    },
    pause () {
      clearInterval(this.timer)
      this.status = 'pause'
    }
  }
}
</script>
