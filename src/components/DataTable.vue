<template>
  <div class="table">
    <v-container>
      <div class="table-responsive">
        <table class="table table-border table-striped caption-top">
          <caption>
            List of Student ({{
              users.length
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
            <tr class="text-center" v-for="user in users" :key="user.id">
              <td>{{ user.id.value }}</td>
              <td>{{ user.name.first }} {{ user.name.last }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.phone }}</td>
              <td>
                <v-btn
                  color="danger"
                  @click="
                    openDelCurrentStudent();
                    selectCurrentStd(user);
                  "
                  ><FIcon :icon="['fas', 'user-times']" /> Delete</v-btn
                >
                &nbsp;
                <v-btn
                  color="warning"
                  @click="
                    openUpdateStudentModel();
                    selectCurrentStd(user);
                  "
                  ><FIcon :icon="['fas', 'user-edit']" /> Edit</v-btn
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";

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
    selectCurrentStd(data) {
      this.Emitter.emit("selectCurrentStd", data);
    },
  },
  computed: {
    ...mapState(["users"]),
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
  },
};
</script>
