function formatTime(time) {
   let minute = ('0' + Math.floor((time / 60000) % 60)).slice(-2)
   let second = ('0' + Math.floor((time / 1000) % 60)).slice(-2)
   return `${minute}:${second}`
}

export default formatTime