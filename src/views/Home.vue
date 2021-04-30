
<template>


   <div class="col-12 home">
  
        <div class="container w100 nopadding">
            <div class="row bluegrid ">

                <div class="col-6 ">
                    <div class="row ">
                        <div class="col-12 ">$</div>
                        <div class="col-12 ">US Dollar</div>
                    </div>
                </div>

                <div class="col-6  btn-group ">
                <router-link :to="'/currency'" class="w100">
                    <input class="text-right form-control-lg boxtop codes" id="code" v-model="input"   >
                          </router-link>
            
                </div>
 
            </div>

        </div>
       
        <div class="container w100 nopadding">
            <div class="row greengrid " >

                <div class="col-6 ">
                    <div class="row ">

                        <div class="col-12 ">$</div>
                        <div class="col-12 ">GBP</div>
                    
                    </div>
                </div>
                

                <div class="col-6  btn-group  "   id="converted">
                <router-link :to="'/currency'" class="w100">
                    <input class="text-right form-control-lg  box "  id="code1" v-model="cur2"  placeholder="00.00 " >
                     </router-link>
                </div>

            </div>
          
            <div class="container w100 nopadding ">
                <div class="row keypad ">

                    <div class="col-12 keypadcol ">
                        <div class="btn-group keys">
                          <button type="button " class="btn btn-outline-secondary mybutton " @click="addDigit(1);">1</button>
                            <button type="button " class="btn btn-outline-secondary py-3 " @click="addDigit(2);">2</button>
                            <button type="button " class="btn btn-outline-secondary py-3 " @click="addDigit(3);">3</button>
                        </div>


                    </div>

                    <div class="col-12 keypadcol ">
                        <div class="btn-group keys ">
                            <button type="button " class="btn btn-outline-secondary py-3 " @click="addDigit(4);">4</button>
                            <button type="button " class="btn btn-outline-secondary py-3 " @click="addDigit(5);">5</button>
                            <button type="button " class="btn btn-outline-secondary py-3 " @click="addDigit(6);">6</button>
                        </div>
                    </div>


                    <div class="col-12 keypadcol ">
                        <div class="btn-group keys ">
                            <button type="button " class="btn btn-outline-secondary py-3 " @click="addDigit(7);">7</button>
                            <button type="button " class="btn btn-outline-secondary py-3 " @click="addDigit(8);">8</button>
                            <button type="button " class="btn btn-outline-secondary py-3 " @click="addDigit(9);">9</button>
                        </div>
                    </div>


                    <div class="col-12 keypadcol ">
                        <div class="btn-group keys">
                            <button type="button " class="btn btn-outline-secondary py-3 " @click="resetValues();">X</button>
                            <button type="button " class="btn btn-outline-secondary py-3 " @click="addDigit(0);">0</button>
                            <button type="button " class="btn btn-outline-secondary py-3 " onclick="document.getElementById( 'code'); ">&uarr;&darr;</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    </div>
</template>

<script>

import {mapState} from "vuex"
import axios from 'axios'

export default {
  
  components: {
    
  },
  computed: {
    ...mapState(["from","to"]),

     input: {
      get() {
        return this.cur1;
      },
      set(val) {
     //   if (this.timeout) clearTimeout(this.timeout);
      //  this.timeout = setTimeout(() => {
          this.cur1 = val;
          this.convertCurrency();
    //    }, 320);
      }
    },
  
  },
  data(){
    return{
      cur1:"100",
      cur2:"",
      timeout:null,
      
    }
  },
  methods: {
    test(){
      console.log('cur1', this.cur1)
    },
    addDigit(newDigit){
      this.cur1=this.cur1+String(newDigit)
      console.log(this.to, this.from)
      this.convertCurrency(this.to,this.from)

    },
    resetValues(){
      this.cur1=0
    },
  async convertCurrency(to,from){
      try {
         let response =await axios.get (`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json`)
         console.log("response", response)
         this.cur2=this.cur1*response.data[to]
      } 
      catch (error) {
        
        
      }
    },
  },
};
</script>




<style scoped src="../assets/css/style.css">



