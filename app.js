new Vue({
    el: '#app',
  
    data () {
      return {
        tracker: {
          courses   : [
            { title: 'python basic', time: 12 },
            { title: 'python intermedio', time: 15 },
            { title: 'python avanzado', time: 15 },
            { title: 'django basic', time: 17 },
            { title: 'django avanzado', time: 18 },
            { title: 'ecmascript', time: 10 },
            
          ],
        },
  
        color: 'f4f4f4',
      }
    },
  
    created () {
      console.log('Created...')
    },
  
    mounted () {
      console.log('Mounted...')
    },
  
    methods: {
      addCoutse (course) {
        this.courses.push(course)
      }
    }
  })