<template>
  <div class="home">
    <Member msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Member from "@/components/Member.vue";

export default {
  name: "Home",
  components: {
    Member,
  },
};
</script>
