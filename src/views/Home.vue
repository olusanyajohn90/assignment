
<template>


   <div class="col-12 home">
  
        <div class="container w100 nopadding">
            <div class="row bluegrid ">

                <div class="col-6 ">
                    <div class="row ">
                        <div class="col-12 ">{{ from.symbol }}</div>
                        <div class="col-12 ">{{ from.name }}</div>
                    </div>
                </div>

                <div class="col-6  btn-group ">
                <router-link :to="'/currency?change=from'" class="w100">
                    <input class="text-right form-control-lg boxtop codes" id="code" placeholder="0.00" v-model="currentValue"   >
                          </router-link>
            
                </div>
 
            </div>

        </div>
       
        <div class="container w100 nopadding">
            <div class="row greengrid " >

                <div class="col-6 ">
                    <div class="row ">

                        <div class="col-12 ">{{ to.symbol }}</div>
                        <div class="col-12 ">{{ to.name }}</div>
                    
                    </div>
                </div>
                

                <div class="col-6  btn-group  "   id="converted">
                <router-link :to="'/currency?change=to'" class="w100">
                    <input class="text-right form-control-lg  box "  id="code1" v-model="cur2"  placeholder="00.00 " >
                     </router-link>
                </div>

            </div>
          
            <div class="container w100 nopadding ">
                <div class="row keypad ">

                    <div class="col-12 keypadcol ">
                        <div class="btn-group keys">
                          <button type="button " class="btn btn-outline-secondary mybutton " @click="addDigitAndConvertCurrency(1);">1</button>
                            <button type="button " class="btn btn-outline-secondary py-3 mybutton " @click="addDigitAndConvertCurrency(2);">2</button>
                            <button type="button " class="btn btn-outline-secondary py-3 mybutton" @click="addDigitAndConvertCurrency(3);">3</button>
                        </div>


                    </div>

                    <div class="col-12 keypadcol ">
                        <div class="btn-group keys ">
                            <button type="button " class="btn btn-outline-secondary py-3 mybutton" @click="addDigitAndConvertCurrency(4);">4</button>
                            <button type="button " class="btn btn-outline-secondary py-3 mybutton" @click="addDigitAndConvertCurrency(5);">5</button>
                            <button type="button " class="btn btn-outline-secondary py-3 mybutton" @click="addDigitAndConvertCurrency(6);">6</button>
                        </div>
                    </div>


                    <div class="col-12 keypadcol ">
                        <div class="btn-group keys ">
                            <button type="button " class="btn btn-outline-secondary py-3 mybutton" @click="addDigitAndConvertCurrency(7);">7</button>
                            <button type="button " class="btn btn-outline-secondary py-3 mybutton" @click="addDigitAndConvertCurrency(8);">8</button>
                            <button type="button " class="btn btn-outline-secondary py-3 mybutton" @click="addDigitAndConvertCurrency(9);">9</button>
                        </div>
                    </div>


                    <div class="col-12 keypadcol ">
                        <div class="btn-group keys">
                            <button type="button " class="btn btn-outline-secondary py-3 mybutton" @click="resetValues();">X</button>
                            <button type="button " class="btn btn-outline-secondary py-3 mybutton" @click="addDigitAndConvertCurrency(0);">0</button>
                            <button type="button " class="btn btn-outline-secondary py-3 mybutton" @click="swap">&uarr;&darr;</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    </div>
</template>

<script>

import {mapState,mapActions} from "vuex"
import axios from 'axios'



export default {
  mounted(){
    if (this.currentValue!= "") {
        this.convertCurrency(this.to.abbr,this.from.abbr)

    }
  },
  computed: {
    ...mapState(["from","to","currentValue"]),
  
  },
  data(){
    return{
      
      cur2:"",
     
      
    }
  },
  methods: {
    ...mapActions(["changeCurrency","changeCurrentValue"]),
   swap(){
    let temp1 = {...this.from}
    let temp2 = {...this.to}
     this.changeCurrency(["to",temp1])
     this.changeCurrency(["from",temp2])

   },
    addDigitAndConvertCurrency(newDigit){
      this.addDigit(newDigit)
      this.convertCurrency(this.to.abbr,this.from.abbr)
    },
    addDigit(newDigit){
      this.changeCurrentValue(String(this.currentValue)+String(newDigit))
      
    },
    resetValues(){
      this.changeCurrentValue("")
      
    },
    toTwoDecimalPlaces(){
      this.cur1=this.cur1*0.001
    },
  async convertCurrency(to,from){
    
      try {
         let response =await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json`)
         
         this.cur2=this.currentValue*response.data[to]
      } 
      catch (error) {
        console.log(error)
        
      }
    },
  },
};
</script>




<style scoped src="../assets/css/style.css">



