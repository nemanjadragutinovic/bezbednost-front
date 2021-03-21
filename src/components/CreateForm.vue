<template>
  <div>
    <!--Errors-->
    <b-container name="errors" v-if="error">
      <b-alert show variant="danger">{{errorMessage}}</b-alert>
    </b-container>

    <b-container class="d-flex justify-content-center">
      
      <b-card class="card">
        <!--Card header-->
        <div class="header pt-3 lighten-2">
          <div class="row d-flex justify-content-start">
            <h4 class="deep-grey-text mt-3 mb-4 pb-1 mx-5" style="color:#001529; font-style:oblique">Молимо Вас да попуните форму</h4>
          </div>
        </div>
        <!--Card body-->
        <div class="form-group">
          <div class="card-body">

            <b-container class="form" fluid>

              <b-row class="my-3">
                <b-col sm="12">
                  <label class="center">Име</label>
                  <b-form-input style="width:48%" placeholder="Унесите име" type="text" v-model="subject.name"></b-form-input>
                </b-col>
                <b-col style="margin-left: 242px;margin-top: -70px;" sm="12">
                  <label class="center">Презиме</label>
                  <b-form-input style="width:48%" placeholder="Унесите презиме" type="text" v-model="subject.surname"></b-form-input>
                </b-col>
              </b-row>

              <b-row class="my-3">
                <b-col sm="12">
                  <label class="center">Имејл</label>
                  <b-form-input placeholder="Унесите имејл" type="email" v-model="subject.email"></b-form-input>
                </b-col>
              </b-row>

              <b-row class="my-3">
                <b-col sm="12">
                  <label class="center">Организација</label>
                  <b-form-input placeholder="Унесите организацију" type="text" v-model="subject.organisation"></b-form-input>
                </b-col>
              </b-row>

              <b-row class="my-3">
                <b-col sm="12">
                  <label class="center">Организациона јединица</label>
                  <b-form-input placeholder="Унесите организациону јединицу" type="text" v-model="subject.orgUnit"></b-form-input>
                </b-col>
              </b-row>

              <br/>

              <div>
                <button type="submit" class="btn btn-primary" @click="createForm()">Поднеси захтев</button>
              </div>
            </b-container>
          </div>
        </div>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      subject: {
        name: "",
        surname: "",
        email: "",
        organisation: "",
        orgUnit: ""
      },
      error: false,
      errorMessage: ""
    };
  },
  methods: {
    createForm() {
      this.error = false;
      if (
        this.subject.email == "" ||
        this.subject.name == "" ||
        this.subject.surname == "" ||
        this.subject.organisation == "" ||
        this.subject.orgUnit == ""
      ) {
        this.errorMessage = "Molimo vas popunite sva polja!";
        this.error = true;
        return;
      }
      
      axios
        .post("/subject", this.subject)
        .then(subject=>{
          this.subject= subject.data;
          this.error= false;
          location.reload();
        })
        .catch(error => {
          console.log(error);
          this.errorMessage = "Uneti e-mail već postoji!";
          this.error = true;
        });
    }
  }
};
</script>

<style>

.header {
  background: #EFF2F8;
}

.card {
  margin: auto;
  width: 60%;
}

.form {
  width: 500px;
}

.ml-5, .mx-5 {
    margin-left: 6rem !important;
}

</style>
