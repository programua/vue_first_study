const Devices = {
  template:
    '<div class="device" v-on:click="popups">' + 
      '<div class="img-box">' + 
      '</div>' +
      '<div class="info-box">' +
        '<p>name : {{ name }}</p>' +
        '<p>made : {{ made }}</p>' +
        '<p>price : {{ price }}</p>' +
      '</div>' +
    '</div>',
  props:{
      name: String,
      made: String,
      price: Number
  },
  data: function(){
      return {
          name,
          made,
          price
      }
  },
  methods: {
      popups: function(){
          alert("name: " + this.name +
            "\nmade: " + this.made +
            "\nprice: " + this.price)
      }
  }    
}

new Vue({
    el: '#contents',
    components: {
        'device-template': Devices
    }
})