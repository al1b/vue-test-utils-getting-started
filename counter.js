// counter.js

export default {
  template: `
    <div>
      <span class="count">{{ count }}</span>
      <button @click="increment">Increment</button>
    </div>
  `,
  props: ['p1'],
  data () {
    return {
      count: 0
    }
  },

  methods: {
    increment () {
	  this.p1 = 1; // this cause vue throws a warning about not mutating props directly inside the componenet
      this.count++
    }
  }
}
