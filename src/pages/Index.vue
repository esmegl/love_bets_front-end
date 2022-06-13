 <template>
  <q-page>
    <div class="q-pa-md doc-container bg-image shadow-10">
      <div class="row justify-center">
        <div class="col-8">
          <q-img class="lovebets-logo" src="~assets/lovebets_logo_full.svg"/>
        </div>  
      </div>
      <div class="row" style="height: 300px">
        <div class="col-6 self-center center">
          <q-btn class="btn bg-primary text-white">Get married!</q-btn>
        </div>
        <div class="col-6 self-center center">  
          <q-btn to="/how_does_it_work" class="btn bg-white text-primary">How does it work?</q-btn>
        </div>  
      </div>  
    </div>  

    <!-- About section -->
    <div class="row q-pa-lg justify-evenly">
      <div class="col-12 text-left">
        <h3 class="text-bold">
          About this project
        </h3>
      </div> 

      <div class="col-3 text-blue-grey-10 text-left">
        <q-card flat>
          <q-card-section> 
            <div class="text-h6">
              Register your love on blockchain
            </div>
          </q-card-section>   
            <q-separator dark inset />
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

      <div class="col-3 text-blue-grey-10">  
        <q-card flat>
          <q-card-section> 
            <div class="text-h6">
              Tell everyone how much you love your significant other!
            </div>
          </q-card-section>   
            <q-separator dark inset />
          <q-card-section class="q-pt-none"> 
            You will be able to see the marriage's high scores, the more time you are together and the more you pay, the more points you get!
          </q-card-section> 
        </q-card>         
      </div>  

      <div class="col-3 text-blue-grey-10">  
        <q-card flat >
          <q-card-section> 
            <div class="text-h6">
              Are you polyamorous? 
            </div>
            <div class="text-subtitle2">  
              Lovebets is also for you!
            </div>
          </q-card-section>   
            <q-separator dark inset />
          <q-card-section> 
            <div class="q-pt-none">            
              It also allows you to marry with multilple people.
              Don't stop being in the last vanguard of thechnology.
            </div> 
          </q-card-section>  
        </q-card>           
      </div>     
      <div class="col-3 text-blue-grey-10">  
        <q-card flat>
          <q-card-section> 
            <div class="text-h6">
              Marriage not going so well? 
            </div>
            <div class="text-subtitle2">
              Don't worry!
            </div> 
          </q-card-section>   
            <q-separator dark inset />
          <q-card-section> 
            <div class="q-pt-none">  
              You can also divorce and your union will stop appearing on the blockchain. It is like a tattoo, it costs to get it and it costs to erase it.
            </div>
        </q-card-section>  
        </q-card>      
      </div>    
    </div> 

  </q-page>
</template>

<style>

  .center {
    display: flex;
    justify-content: center;
    align-items: center; 
  }

  .lovebets-logo {
    font-family: "OpenSans";
  }

  .btn {
    top: 50%;
    font-size: 16px;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    position: relative;
  }

  .bg-image {
    background-image: url(../assets/rings_4.jpg);
    background-repeat: no-repeat;
    background-position: center; 
    background-size: auto;
  }

</style>

<!-- <script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      to: null,
      amount: null,
      memo: null,
      showTransaction: null,
      transaction: null,
      explorerUrl: process.env.NETWORK_EXPLORER
    };
  },
  computed: {
    ...mapGetters("account", ["isAuthenticated", "accountName"])
  },
  methods: {
    ...mapActions("account", ["accountExists"]),
    async send() {
      if (!(await this.accountExists(this.to))) {
        this.$q.notify({
          type: "negative",
          message: `Account ${this.to} does not exist`
        });
        return;
      }

      const actions = [
        {
          account: "eosio.token",
          name: "transfer",
          data: {
            from: this.accountName.toLowerCase(),
            to: this.to,
            quantity: `${parseFloat(this.amount).toFixed(4)} TLOS`,
            memo: this.memo
          }
        }
      ];
      const transaction = await this.$store.$api.signTransaction(actions);
      if (transaction) {
        this.showTransaction = true;
        this.transaction = transaction.transactionId;
      }
    }
  }
};
</script> -->
