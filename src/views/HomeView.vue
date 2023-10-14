<template>
  <div class="home">
    <AppHeader />
    <DataTable />
    <StudentModel />
    <UpdateStudentModel />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import DataTable from "@/components/DataTable.vue";
import StudentModel from "@/components/StudentModel.vue";
import UpdateStudentModel from "@/components/UpdateStudentModel.vue";
export default {
  components: {
    AppHeader,
    DataTable,
    StudentModel,
    UpdateStudentModel,
  },
};
</script>
