
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
                    <input class="text-right form-control-lg boxtop codes" id="code" v-model="cur1"  placeholder="00.00 " >
                          </router-link>
            
                </div>
 
            </div>

        </div>
       
        <div class="container w100 nopadding">
            <div class="row greengrid " >

                <div class="col-6 ">
                    <div class="row ">

                        <div class="col-12 ">$</div>
                        <div class="col-12 ">US Dollar</div>
                    
                    </div>
                </div>
                

                <div class="col-6  btn-group  "   id="converted">
                <router-link :to="'/currency'" class="w100">
                    <input class="text-right form-control-lg  box "  id="code1"  placeholder="00.00 " >
                     </router-link>
                </div>

            </div>
          
            <div class="container w100 nopadding ">
                <div class="row keypad ">

                    <div class="col-12 keypadcol ">
                        <div class="btn-group keys">
                            <button type="button " class="btn btn-outline-secondary mybutton " onclick="addDigit(1); test()">1</button>
                            <button type="button " class="btn btn-outline-secondary py-3 " onclick="document.getElementById( 'code').value=document.getElementById( 'code').value + '2'; ">2</button>
                            <button type="button " class="btn btn-outline-secondary py-3 " onclick="document.getElementById( 'code').value=document.getElementById( 'code').value + '3'; ">3</button>
                        </div>


                    </div>

                    <div class="col-12 keypadcol ">
                        <div class="btn-group keys ">
                            <button type="button " class="btn btn-outline-secondary py-3 " onclick="document.getElementById( 'code').value=document.getElementById( 'code').value + '4'; ">4</button>
                            <button type="button " class="btn btn-outline-secondary py-3 " onclick="document.getElementById( 'code').value=document.getElementById( 'code').value + '5'; ">5</button>
                            <button type="button " class="btn btn-outline-secondary py-3 " onclick="document.getElementById( 'code').value=document.getElementById( 'code').value + '6'; ">6</button>
                        </div>
                    </div>


                    <div class="col-12 keypadcol ">
                        <div class="btn-group keys ">
                            <button type="button " class="btn btn-outline-secondary py-3 " onclick="document.getElementById( 'code').value=document.getElementById( 'code').value + '7'; ">7</button>
                            <button type="button " class="btn btn-outline-secondary py-3 " onclick="document.getElementById( 'code').value=document.getElementById( 'code').value + '8'; ">8</button>
                            <button type="button " class="btn btn-outline-secondary py-3 " onclick="document.getElementById( 'code').value=document.getElementById( 'code').value + '9'; ">9</button>
                        </div>
                    </div>


                    <div class="col-12 keypadcol ">
                        <div class="btn-group keys">
                            <button type="button " class="btn btn-outline-secondary py-3 " onclick="document.getElementById( 'code').value=document.getElementById('code').value.slice(0, -1);">X</button>
                            <button type="button " class="btn btn-outline-secondary py-3 " onclick="document.getElementById( 'code').value=document.getElementById( 'code').value + '0'; ">0</button>
                            <button type="button " class="btn btn-outline-secondary py-3 " onclick="document.getElementById( 'code'); ">&uarr;&darr;</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    </div>
</template>

<script>


export default {
  
  components: {
    
  },
  computed: {
  
  },
  data(){
    return{
      cur1:""
      
    }
  },
  methods: {
    test(){
      console.log('cur1', this.cur1)
    },
    addDigit(newDigit){
      this.cur1=this.cur1+String(newDigit)
    }
  },
};
</script>

<style scoped src="../assets/css/style.css">



