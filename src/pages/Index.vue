 <template>
  <div class="row q-pa-lg justify-evenly">
    <div class="col-12 text-center">
      <q-img class="logo" src="~assets/banner1440_light.png"/>
      <h3 class="text-bold">
        About this project
      </h3>
    </div> 

    <div class="col-5 text-blue-grey-10 text-left">
      <q-card flat bordered>
        <img src="~/assets/rings_1.jpg"/>
        <q-card-section> 
          <div class="test-ubtitle2">
            Lovebets is a project that allows you to register your marriage on the Telos blockchain and bet you will be together until death do you part.
          </div>  
          
          <div class="test-subtitle2">
            You can choose your ministier and invite all the witnesses you want!
          </div> 
        </q-card-section>  
      </q-card>    
    </div>  

    <div class="col-5 text-blue-grey-10">  
      <q-card flat bordered>
        <img src="~/assets/ranking.jpg"/>
        <q-card-section> 
          <div class="text-h6">
            Do you want to tell everyone how much you love your significant other?
          </div>
          <div class="text-subtitle2">  
            With Lovebets you can do it!
          </div>  
        </q-card-section> 

        <q-card-section class="q-pt-none"> 
          You will be able to see the marriage's high scores, the more time you are together and the more you pay, the more points you get!
        </q-card-section> 
      </q-card>         
    </div>  

    <div class="col-5 text-blue-grey-10">  
      <q-card flat bordered>
        <img src="~/assets/poly_1.jpg"/>
        <q-card-section> 
          <div class="text-h6">
            Are you polyamorous? 
          </div>
          <div class="text-subtitle2">  
            Lovebets is also for you!
          </div>
          <div class="q-pt-none">            
            Since it also allows you to marry with multilple people.
            Don't stop being in the last vanguard of thechnology.
          </div> 
        </q-card-section>  
      </q-card>           
    </div>     
    <div class="col-5 text-blue-grey-10">  
      <q-card flat bordered>
        <img src="~/assets/broken_heart_1.jpg"/>
        <q-card-section> 
          <div class="text-h6">
            Marriage not going so well? 
          </div>
          <div class="text-subtitle2">
            Don't worry!
          </div>  
          <div class="q-pt-none">  
            You can also divorce and your union will stop appearing on the blockchain. It is like a tattoo, it costs to get it and it costs to erase it.
          </div>
      </q-card-section>  
      </q-card>      
    </div>    
  </div> 

</template>

<script>
export default {
  name: "Index"
};
</script>

 <!--
<template>

  <div class="q-pa-md row items-start q-gutter-md">
    <div class="col-6">
      <q-card class="my-card" flat bordered>
        <q-card-section horizontal>
          <q-card-section class="q-pt-xs">
            <div class="text-overline">About this project</div>
            <div class="text-h5 q-mt-md q-mb-md">Lovebets</div>
            <div class="text-subtitle2 text-grey">
              Lovebets is a project that allows you to register your marriage on the Telos blockchain and bet you will be togethrt until death do you part.
            </div>
          </q-card-section>

          <q-card-section class="col-5 flex flex-center">
            <q-img
              class="rounded-borders"
              src="~/assets/lovebets_icon_front.png"
            />
          </q-card-section>
        </q-card-section>

        <q-separator />
      </q-card>
    </div>



    <div class="col-6 text-black text-center " >

      <q-card class="my-card">
        <img src="~/assets/rings_1.jpg">

        <q-card-section>
          <div class="text-h6">Register your love on blockchain</div>
          <div class="text-subtitle2">Scroll down to know more</div>
        </q-card-section>

      </q-card> 




 
      <div class="col-6">
        <h2 class="text-weight-bold">
          
        </h2>
        <h5> 
          
        </h5>
      </div>
    </div>
    <div class="col-12 bg-white text-primary text-center">
        <h3>
          About lovebets
        </h3>
    </div>
    <div class="col-6 bg-primary text-white text-center">
      <h6>
        Lovebets is a project that allows you to register your marriage on the Telos blockchain and bet you will be togethrt until death do you part.
      </h6>
    </div>  

     <div class="col-6 bg-primary text-white text-center">
      <h6>
        You can choose your ministier and invite all the witnesses you want!
      </h6> 
    </div>   

  </div>  
</template> -->

<style lang="sass">

  .bg-rings-1
    background-image: url(../assets/rings_1.jpg)
    background-repeat: no-repeat
    background-position: center

</style>
