<template>
  <div class="dialog-model">
    <v-dialog v-model="dialog"
      ><v-container>
        <v-row class="d-flex align-center justify-center"
          ><v-card class="px-8 py-5" width="480">
            <div class="d-flex align-center justify-space-between">
              <h4>Add New Student</h4>
              <FIcon :icon="['fas', 'close']" @click="dialog = false" />
            </div>
            <v-divider></v-divider>
            <v-form @submit.prevent>
              <v-text-field
                hide-details="auto"
                label="Email address"
                placeholder="Your Email"
                type="email"
                :color="
                  v$.newStudent.email.$error ? 'red' : 'deep-purple-lighten-1'
                "
                v-model="newStudent.email"
              ></v-text-field>
              <span class="text-red" v-if="v$.newStudent.email.$error">{{
                v$.newStudent.email.$errors[0].$message
              }}</span>
              <v-divider></v-divider>
              <v-text-field
                hide-details="auto"
                label="Enter Your Name"
                placeholder="Name"
                type="text"
                :color="
                  v$.newStudent.name.$error ? 'red' : 'deep-purple-lighten-1'
                "
                class="mt-2"
                v-model="newStudent.name"
              ></v-text-field>
              <span class="text-red" v-if="v$.newStudent.name.$error">{{
                v$.newStudent.name.$errors[0].$message
              }}</span>
              <v-divider></v-divider>
              <v-text-field
                hide-details="auto"
                label="Your Phone"
                placeholder="Enter Your Phone"
                type="number"
                class="mt-2"
                v-model="newStudent.phone"
                :color="
                  v$.newStudent.phone.$error ? 'red' : 'deep-purple-lighten-1'
                "
              ></v-text-field>
              <span class="text-red" v-if="v$.newStudent.phone.$error">{{
                v$.newStudent.phone.$errors[0].$message
              }}</span>
              <v-divider></v-divider>
              <v-btn
                type="submit"
                block
                class="mt-2"
                color="deep-purple-lighten-1"
                @click="addNewStudent()"
                >Submit</v-btn
              >
            </v-form></v-card
          ></v-row
        >
      </v-container></v-dialog
    >
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
export default {
  inject: ["Emitter"],
  data: () => ({
    dialog: false,
    v$: useVuelidate(),
    newStudent: {
      name: "",
      email: "",
      phone: "",
    },
  }),
  validations() {
    return {
      newStudent: {
        name: { required, minLength: minLength(5) },
        email: { required, email },
        phone: { required, minLength: minLength(10) },
      },
    };
  },
  mounted() {
    this.Emitter.on("openStudentModel", () => {
      this.dialog = true;
    });
  },
  methods: {
    addNewStudent() {
      this.v$.newStudent.$validate();
      if (!this.v$.newStudent.$error) {
        console.log("ok");
      } else {
        console.log("error");
      }
    },
  },
};
</script>
