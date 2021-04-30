<template>
  <div class="col-12 topbody about ">


        <div class="row" style="float: right;"><button></button></div>

        <div class="container w100 nopadding nomargin ">
            <div class="row bluegrid ">

                <div class="col-6 ">
                    <div class="row ">
                        <div class="col-12 ">$</div>
                        <div class="col-12 ">US Dollar</div>
                    </div>
                </div>

                <div class="col-6  btn-group  ">
                    <input class="text-right form-control-lg  boxtop " id="code " placeholder="00.00 " v-model="cur1" >
                </div>

            </div>

        </div>

     

        <div class="row overlay" id="overlay dollar" @click="changeTo('USD')" style=" padding-top: 30px; ">


            <div class="row list ">
                <div class="col-12 ">$ US Dollar
                    <span style="float: right;">&#10003;</span></div>

            </div>




        </div>



       

        <div class="row "  @click="changeTo('GBP')" style="padding-top: 30px; " id="pounds">


            <div class="row list ">
                <div class="col-12 ">$ British Pound<span style="float: right;">&#10003;</span> </div>

            </div>




        </div>

       

        <div class="row "  @click="changeTo('EUR')" style="padding-top: 30px; " id="euro">


            <div class="row list ">
                <div class="col-12 ">$ Euro <span style="float: right;">&#10003;</span>
                </div>
            </div>




        </div>

      
        <div class="row " @click="changeTo('CNY')" style="padding-top: 30px; " id="yuan">


            <div class="row list ">
                <div class="col-12 ">$ Chinese Yuan
                    <span style="float: right;">&#10003;</span></div>
            </div>




        </div>

       

        <div class="row " @click="changeTo('INR')" style="padding-top: 30px; " id="rupee">


            <div class="row list ">
                <div class="col-12 ">$ Indian Rupee
                    <span style="float: right;">&#10003;</span></div>
            </div>




        </div>
    </div>
</template>

<script>

import {mapActions} from "vuex"

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
      cur1:"",
      timeout:null,
      
    }
  },
  methods: {
    ...mapActions(["changeTo"]),
    
    test(){
      console.log('cur1', this.cur1)
    },
    addDigit(newDigit){
      this.cur1=this.cur1+String(newDigit)
      console.log(this.to, this.from)
    },
    resetValues(){
      this.cur1=0
    },
    convertCurrency(){
      console.log('i am converting',)
    },
  },
};
</script>

<style scoped src="../assets/css/liststyle.css">