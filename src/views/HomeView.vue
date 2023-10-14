<template>
  <div class="home">
    <AppHeader />
    <DataTable />
    <StudentModel />
    <UpdateStudentModel />
    <DelCurrentStudent />
    <DelAllStudents />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import DataTable from "@/components/DataTable.vue";
import StudentModel from "@/components/StudentModel.vue";
import UpdateStudentModel from "@/components/UpdateStudentModel.vue";
import DelCurrentStudent from "@/components/DelCurrentStudent.vue";
import DelAllStudents from "@/components/DelAllStudents.vue";
export default {
  components: {
    AppHeader,
    DataTable,
    StudentModel,
    UpdateStudentModel,
    DelCurrentStudent,
    DelAllStudents,
  },
};
</script>
