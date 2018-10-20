Vue.component('device-template',{
  props:['item'],
  template: 
    '<div class="device" v-on:click="popups">' +
      '<div class="img-box">' +
      '</div>' +
      '<p>{{ item.name }}</p>' +
      '<p>{{ item.made }}</p>' +
      '<p>{{ item.price }}</p>' +
      '<p>{{ item.com }}</p>' +
    '</div>',
  methods: {
      popups: function(){
          alert("name: " + this.item.name +
            "\nmade: " + this.item.made +
            "\nprice: " + this.item.price +
            "\nfeature: " + this.item.com)
      }
  }    
})

new Vue({
    el: '#contents',
    data: {
      devices:[
        { name:"ZZ01", made:"japan", price:"20,000", com:"new!"},
        { name:"ZZ02", made:"japan", price:"10,000", com:"new!"},
        { name:"ZZ03", made:"america", price:"21,000", com:"new!"},
        { name:"ZZ04", made:"japan", price:"20,000", com:"new!"},
        { name:"ZZ05", made:"america", price:"23,000", com:"new!"},
        { name:"ZZ06", made:"canada", price:"20,000", com:"new!"},
        { name:"ZZ07", made:"japan", price:"25,000", com:"used!"},
        { name:"ZZ08", made:"china", price:"10,000", com:"old!"},
        { name:"ZZ09", made:"america", price:"1,000", com:"cheep!"},
        { name:"ZZ10", made:"china", price:"3,000", com:"new!"},
    ]}
})