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
      successMessage: false,
      errorMessage: false,
      success: null,
    };
  },
  methods: {
    sendForm() {
      this.loading = true;
      const payload = {
        name: this.name,
        email: this.email,
        message: this.message,
      };

      console.log(payload);
      axios
        .post("http://127.0.0.1:8000/api/contacts", payload)
        .then((response) => {
          console.log(response.data);
          // Imposta lo stato di successo
          if (response.data.success) {
            this.successMessage = true;
            this.errorMessage = false;
            this.name = "";
            this.email = "";
            this.message = "";
          } else {
            this.successMessage = false;
            this.errorMessage = true;
          }
        })
        .catch((error) => {
          console.error("La richiesta è fallita:", error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
<template>
  <section id="contact">
    <h2 class="p-4">Contact Me</h2>
    <div class="container">
      <form
        action=""
        v-on:submit.prevent="sendForm()"
        class="container_form text-white border border-2 rounded"
      >
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
          <textarea
            class="form-control"
            id="message"
            v-model="message"
            rows="3"
          >
          </textarea>
        </div>

        <button type="submit" class="btn contact_btn" :disabled="loading">
          <span v-if="loading">Invio in corso...</span>
          <span v-else>Invia</span>
        </button>
        <div v-if="loading">Loading...</div>
        <div v-else>
          <div v-if="successMessage" class="alert alert-success" role="alert">
            Messaggio inviato con successo!
          </div>
          <div v-if="errorMessage" class="alert alert-danger" role="alert">
            Devi compilare tutti i campi del form
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
