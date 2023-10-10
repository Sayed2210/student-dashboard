<template>
  <div class="header">
    <h1 class="bg-deep-purple mt-0 text-center pa-2">
      Crud Student Using Vue.js
    </h1>
    <v-container>
      <v-row class="justify-space-between">
        <v-col cols="12" sm="4"
          ><v-btn color="primary"
            ><FIcon :icon="['fas', 'user']" class="mr-2" />Add New
            Student</v-btn
          ></v-col
        >
        <v-col cols="12" sm="4" class="d-flex justify-end"
          ><v-btn color="danger" class="text-white"
            ><FIcon :icon="['fas', 'user']" class="mr-2" />Del All
            Students</v-btn
          ></v-col
        >
      </v-row>
      <v-row
        ><v-alert
          closable
          title="Alert title"
          text="..."
          color="success"
        ></v-alert
      ></v-row>
      <v-row
        ><v-alert
          closable
          title="Alert title"
          text="..."
          type="warning"
        ></v-alert
      ></v-row>
    </v-container>
  </div>
</template>
