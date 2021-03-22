<template>
<div class="card" id="appp">
  
    <div class="form-group">
          <div class="card-body mt-4">

            <div class="row">
              <div class="col">
                <div class="md-form">
                  <label for="Form-username">Име</label>
                  <input
                    type="text"
                    id="Form-username"
                    class="form-control"
                    disabled
                    v-model="user.name"
                  />

                  <label for="Form-ime">Презиме</label>
                  <input
                    type="text"
                    class="form-control"
                   disabled
                    v-model="user.surname"
                  />

                  <label for="Form-phone">Организација</label>
                  <input
                    type="text"
                    id="Form-phone"
                    class="form-control"
                    disabled
                    v-model="user.organisation"
                  />

                  <label for="Form-email4">Организациона јединица</label>
                  <input
                    type="text"
                    id="Form-email4"
                    class="form-control"
                    disabled
                    v-model="user.orgUnit"
                  />
                </div>
              </div>

              <div class="col">
                <div class="md-form pb-3">
                  <label for="Form-pass4">Валидност</label>
                  <input
                  class="form-control"
                    v-model="validityString"
                    disabled
                    
                  />

                  <label for="Form-prezime">Датум истека</label>
                  <input
                  class="form-control"
                    disabled
                    v-model="datum"
                  />

                     <label for="Form-prezime">CA</label>
                  <input
                  class="form-control"
                    disabled
                    v-model="user.ca"
                  />
                
                </div>
              </div>
            </div>
           

            <div  class="row">
            <div class="col">
             <button class="col mt-4 button valid btn btn-primary" size="sm" @click="checkValidity()">Валидност сертификата</button> 
            </div>  
            <div class="col">
            <button class="col mt-4 button btn btn-primary" size="ml" @click="revokeCertificate()">Поништи сертификат</button>
            </div>
            </div>
            <div>

              <transition name="slide" appear>
              <div class="modale" v-if="showModal">
                  <h2>Certificate download</h2>
                  <p>The certificate has been successfully downloaded.</p>
                  <button class="okButton valid btn btn-primary" @click="showModal = false">Ok</button>
              </div>

        </transition>
      </div>
    </div>
  </div>
</div>

                   

</template>

<script>
import axios from "axios";
export default {
    data() {
      return {
           user: {},
        validity: true,
        validityString: "",
        datum: "",
        showModal: false
      }
    },

    methods: {

        downloadCertificate(){
          this.showModal = true;
          console.log(this.user.ca)
          axios
            .get("/admin/download/" + this.$route.params.id+"/"+this.user.name+"/"+this.user.ca)
            
            .catch(error => {
                console.log(error);
            });

        },

        revokeCertificate() {
            axios
            .post("/ocsp/revokeOcsp/" + this.$route.params.id)
            .then(validity => {
                validity = "Not Valid"
            this.validityString = validity;
            
            
        })
            .catch(error => {
                console.log(error);
            });

                
        },
        checkValidity() {

            axios
        .get("/ocsp/checkValidity/" + this.$route.params.id)
        .then(validity => {
            this.validity = validity.data;
            if(this.validity === true) {
                this.validityString = "Valid";
            } else {
                this.validityString = "Not Valid";
            }
            
        })
        .catch(error => {
            console.log(error);
        });

            
        }

    },
    mounted() {

     axios
      .get("/subject/preuzmi/" + this.$route.params.id)
      .then(subject => {
        this.user = subject.data;
        console.log(subject.data)
      })
      .catch(error => {
        console.log(error);
      });

      axios
      .get("/subject/preuzmiDatum/" + this.$route.params.id)
      .then(datum => {
          console.log(datum + "ima li ga")
        this.datum = datum.data;
       
      })
      .catch(error => {
        console.log(error);
      });
    }

}




</script>

<style>

.cardd {
        background-color: #EFF2F8;
    }



  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* #appp {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
  } */



  .modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 98;
    background-color: rgba(0,0,0,0.3);
  }

  .modale {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    width: 100%;
    max-width: 400px;
    background-color: #FFF;
    border-radius: 16px;
    padding: 25px;



  }
    h1 {
      color: #222;
      font-size: 32px;
      font-weight: 900;
      margin-bottom: 15px;
    }

    p {
      color: #667;
      font-size: 18px;
      font-weight: 400;
      margin-bottom: 15px;
    }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: transform 0.5s;
  }

  .slide-enter,
  .slide-leave-to {
    transform: translateY(-50%) translateX(100vw);
  }

  .okButton {
    margin-left: 37%;
    padding-left: 30px;
    padding-right: 30px;
  }

</style>