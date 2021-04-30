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

     

        <div class="row overlay" id="overlay dollar" onclick="myFunction() " style=" padding-top: 30px; ">


            <div class="row list ">
                <div class="col-12 ">$ US Dollar
                    <span style="float: right;">&#10003;</span></div>

            </div>




        </div>



       

        <div class="row " style="padding-top: 30px; " id="pounds">


            <div class="row list ">
                <div class="col-12 ">$ British Pound<span style="float: right;">&#10003;</span> </div>

            </div>




        </div>

       

        <div class="row " style="padding-top: 30px; " id="euro">


            <div class="row list ">
                <div class="col-12 ">$ Euro <span style="float: right;">&#10003;</span>
                </div>
            </div>




        </div>

      
        <div class="row " style="padding-top: 30px; " id="yuan">


            <div class="row list ">
                <div class="col-12 ">$ Chinese Yuan
                    <span style="float: right;">&#10003;</span></div>
            </div>




        </div>

       

        <div class="row " style="padding-top: 30px; " id="rupee">


            <div class="row list ">
                <div class="col-12 ">$ Indian Rupee
                    <span style="float: right;">&#10003;</span></div>
            </div>




        </div>
    </div>
</template>
<style scoped src="../assets/css/liststyle.css">