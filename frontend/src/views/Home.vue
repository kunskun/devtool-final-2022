<template>
  <div class="home pt-16">
    <v-row>
      <v-col cols="12"  class="d-flex align-center justify-center mt-16">
        <p class="text-h3 mt-16">ระบบรับสมัครนักศึกษาระดับปริญญาตรี</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12"  class="d-flex align-center justify-center">
        <v-btn @click="goSearch">ค้นหา</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
// import Member from "@/components/Member.vue";

export default {
  name: "Home",
  methods: {
    goSearch() {
      this.$router.push({
        name: "Course"
      })
    }
  }
};
</script>
