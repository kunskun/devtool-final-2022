<template>
  <div class="pt-16">
      <v-row>
        <v-col cols="3" v-for="course in courses" :key="course._id">
            <v-card
                class="mx-auto pa-3"
                outlined
            >
                <v-list-item-content>
                    <v-list-item-title class="text-h6 mb-1">
                    {{ course.course }}
                    </v-list-item-title>
                    <v-list-item-subtitle>{{ course.faculty+"/"+course.faculty }}</v-list-item-subtitle>
                    <v-list-item-subtitle>{{ course.semester+"/"+course.year }}</v-list-item-subtitle>
                    <p class="mt-5" style="color: green">
                        {{course.note}}
                    </p>
                </v-list-item-content>

                <v-card-actions>
                <v-btn
                    outlined
                    rounded
                    text
                >
                    สมัคร
                </v-btn>
                <v-btn
                    outlined
                    rounded
                    text
                >
                    ประกาศ
                </v-btn>
                <v-btn
                    outlined
                    rounded
                    text
                >
                    เพิ่มเติม
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "@/plugins/axios";

export default {
  name: "CourseItem",
  data: () => ({
      courses: []
  }),
  mounted() {
    this.getCourse()
  },
  methods: {
      goSearch() {
      this.$router.push({
        name: "Course"
      })
    },
      async getCourse() {
        await axios.get("/all").then((response) => this.courses = response.data)
      }
  }
};
</script>
