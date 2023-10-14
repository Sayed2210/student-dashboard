<template>
  <div class="dialog-model">
    <v-dialog v-model="dialogDel"
      ><v-container>
        <v-row class="d-flex align-center justify-center"
          ><v-card class="px-8 py-5" width="480">
            <div class="d-flex align-center justify-space-between">
              <h4>Delete All Students</h4>
              <FIcon
                :icon="['fas', 'close']"
                @click="dialogDel = false"
                style="cursor: pointer"
              />
            </div>
            <v-divider></v-divider>
            <v-card-text>Are You Sure To Delete All Students</v-card-text>
            <v-divider></v-divider>
            <v-btn block color="danger">Delete All Students</v-btn>
            <v-btn block class="mt-3" color="info"
              >No, I Don't Want Delete
            </v-btn>
          </v-card></v-row
        >
      </v-container></v-dialog
    >
  </div>
</template>

<script>
export default {
  inject: ["Emitter"],
  data: () => ({
    dialogDel: false,
    currentStudent: {
      name: "",
      email: "",
      phone: "",
    },
  }),
  mounted() {
    this.Emitter.on("openDelAllStudents", () => {
      this.dialogDel = true;
    });
  },
};
</script>
