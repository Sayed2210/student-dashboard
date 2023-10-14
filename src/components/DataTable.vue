<template>
  <div class="table">
    <v-container>
      <table class="table table-border table-striped caption-top">
        <caption>
          List of Student ({{
            studentData.length
          }})
        </caption>
        <thead>
          <tr class="text-center text-light">
            <th><FIcon :icon="['fas', 'id-badge']" />Id</th>
            <th><FIcon :icon="['fas', 'user']" />Name</th>
            <th><FIcon :icon="['fas', 'envelope']" />Email</th>
            <th><FIcon :icon="['fas', 'phone']" />Phone</th>
            <th><FIcon :icon="['fas', 'cog']" />Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center">
            <td>1</td>
            <td>Elsayed Hassan</td>
            <td>eh600039@gmail.com</td>
            <td>01013453391</td>
            <td>
              <v-btn color="danger" @click="openDelCurrentStudent"
                ><FIcon :icon="['fas', 'user-times']" /> Delete</v-btn
              >
              &nbsp;
              <v-btn color="warning" @click="openUpdateStudentModel"
                ><FIcon :icon="['fas', 'user-edit']" /> Edit</v-btn
              >
            </td>
          </tr>
        </tbody>
      </table>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    studentData: [],
  }),
  inject: ["Emitter"],
  methods: {
    openUpdateStudentModel() {
      this.Emitter.emit("openUpdateStudentModel");
    },
    openDelCurrentStudent() {
      this.Emitter.emit("openDelCurrentStudent");
    },
  },
};
</script>
