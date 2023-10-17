<template>
  <div class="dialog-model">
    <v-dialog v-model="dialog"
      ><v-container>
        <v-row class="d-flex align-center justify-center"
          ><v-card class="px-8 py-5" width="480">
            <div class="d-flex align-center justify-space-between">
              <h4>Update Student</h4>
              <FIcon
                :icon="['fas', 'close']"
                @click="dialog = false"
                style="cursor: pointer"
              />
            </div>
            <v-divider></v-divider>
            <v-form @submit.prevent>
              <v-text-field
                hide-details="auto"
                label="Email address"
                placeholder="Your Email"
                type="email"
                :color="
                  v$.currentStudent.email.$error ? 'red' : 'yellow-darken-2'
                "
                v-model="currentStudent.email"
              ></v-text-field>
              <span class="text-red" v-if="v$.currentStudent.email.$error">{{
                v$.currentStudent.email.$errors[0].$message
              }}</span>
              <v-divider></v-divider>
              <v-text-field
                hide-details="auto"
                label="Enter Your Name"
                placeholder="Name"
                type="text"
                :color="
                  v$.currentStudent.name.$error ? 'red' : 'yellow-darken-2'
                "
                class="mt-2"
                v-model="currentStudent.name.first"
              ></v-text-field>
              <span class="text-red" v-if="v$.currentStudent.name.$error">{{
                v$.currentStudent.name.$errors[0].$message
              }}</span>
              <v-divider></v-divider>
              <v-text-field
                hide-details="auto"
                label="Your Phone"
                placeholder="Enter Your Phone"
                type="number"
                class="mt-2"
                v-model="currentStudent.phone"
                :color="
                  v$.currentStudent.phone.$error ? 'red' : 'yellow-darken-2'
                "
              ></v-text-field>
              <span class="text-red" v-if="v$.currentStudent.phone.$error">{{
                v$.currentStudent.phone.$errors[0].$message
              }}</span>
              <v-divider></v-divider>
              <v-btn
                type="submit"
                block
                class="mt-2"
                color="yellow-darken-2"
                @click="updateStudent()"
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
    currentStudent: {},
  }),
  validations() {
    return {
      currentStudent: {
        name: { required, minLength: minLength(5) },
        email: { required, email },
        phone: { required, minLength: minLength(10) },
      },
    };
  },
  mounted() {
    this.Emitter.on("openUpdateStudentModel", () => {
      this.dialog = true;
    });
    this.Emitter.on("selectCurrentStd", (data) => {
      this.currentStudent = data;
    });
  },
  methods: {
    updateStudent() {
      this.v$.currentStudent.$validate();
      if (!this.v$.currentStudent.$error) {
        console.log("ok");
      } else {
        console.log("error");
      }
    },
  },
};
</script>
