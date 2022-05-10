<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center pt-5">
        <p class="text-h5">
          ระบบลงทะเบียนปริญญาตรี
        </p>
      </div>
    </v-app-bar>

    <v-main>
      <router-view class="pa-5"/>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
