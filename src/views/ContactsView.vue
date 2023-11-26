<script>
import axios from "axios";
import { store } from "../store.js";
export default {
  name: "ContactsView",

  data() {
    return {
      store,
      loading: false,
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendForm() {
      const payload = {
        name: this.name,
        email: this.email,
        message: this.message,
      };

      console.log(payload);
      axios
        .post("http://127.0.0.1:8000/api/contact", payload)
        .then((response) => {
          // Gestisci la risposta
          console.log(response.data);
        })
        .catch((error) => {
          // Gestisci l'errore
          console.error("La richiesta è fallita:", error);
        });

      /* axios
        .post("http://127.0.0.1:8000/api/contact", payload)
        .then((response) => {
          console.log(response); 
           const success = response.data.success
          if (!success) {
            // there are errors
            console.log(response);
            console.log(response.data.errors);
            this.errors = response.data.errors
          } else {
            // All good
            console.log(response);
            console.log(response.data.message);
            // empty the form
            this.name = ''
            this.email = ''
            this.message = ''
            this.phone = ''

            // print a success message
            this.success = response.data.message
          }
          this.loading = false 
         })
        .catch((error) => {
          console.error(error.message);
        }); */
    },
  },
};
</script>
<template>
  <h2>Contattami</h2>
  <div class="container pt-5">
    <form action="" v-on:submit.prevent="sendForm()">
      <div class="mb-3">
        <label for="name" class="form-label">
          Name
        </label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="name"
          placeholder="Mario Rossi"
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="email"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">
          Message
        </label>
        <textarea class="form-control" id="message" v-model="message" rows="3">
        </textarea>
      </div>
      <button type="submit" class="btn">Invia</button>
    </form>
  </div>
</template>
