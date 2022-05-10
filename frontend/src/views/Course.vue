<template>
  <div class="about">
    <v-row>
      <v-col cols="2">
        <v-select
          :items="faculty"
          label="คณะ"
          outlined
          filled
        />
      </v-col>
      <v-col cols="2">
        <v-select
          :items="round"
          label="รอบรับสมัคร"
          outlined
          filled
        />
      </v-col>
      <v-col cols="2">
        <v-select
          :items="program"
          label="โครงการ"
          outlined
          filled
        />
      </v-col>
      <v-col cols="3">
        <v-select
          :items="course"
          label="หลักสูตร ไทย/นานาชาติ"
          outlined
          filled
        />
      </v-col>
      <v-col cols="3">
        <v-text-field
          v-model="etc"
          label="คำค้นหาเพิ่มเติม"
          outlined
          filled
        />
        <p>ระบบจะค้นหาจากชื่อคณะ/หลักสูตร</p>
      </v-col>
    </v-row>
    <v-row>
      <CourseItem />
    </v-row>
  </div>
</template>
<script>
import CourseItem from "@/components/CourseItem.vue";

export default {
  components: {
    CourseItem
  },
    data: () => ({
      faculty: ['วิศวกรรมศาสคร์', 'บริหารธุรกิจ', 'ทันตแพทยศาสตร์', 'อุตสาหกรรมอาหาร', 'อุตสาหกรรมการบินนานาชาติ', 'สถาปัตยกรรม ซิลปะและการออกแบบ', 'นวัตกรรมการผลิตขั้นสูง'],
      round: ['รอบ - - Direct Admission 3 (International Program)', 'รอบ - - Direct Admission 2 (International Student Only)', 'รอบ - - Direct Admission 2 (International Program)', 'รอบ 2 - โครงการอาชีวะพรีเมี่ยม รอบ 2'],
      program: ['Direct Admission 3  (School of Engineering)', "Direct Admission 3  (School of Engineering) Unified Bachelor's & Master's Degree Program (KMITL - CMKL)", "Direct Admission 3  (School of Engineering) Unified Bachelor's & Master's Degree Program (KMITL - AIT)", "Direct Admission 3,Business Administration Global Entrepreneurship (KMITL Business School)", "Direct Admission 3,Business Administration (KMITL Business School)", "Direct Admission 2 (International Students Only)", "Direct Admission2 (School of Food Industry)", "Direct Admission 2 Bachelor of Engineering Program in Aerospace Engineering Academic Year 2022 International Academy of Aviation Industry (IAAI)", " Direct Admission 3 Dual Bachelor's Degree Program Bachelor Engineering in Civil Engineering (International Program) Bachelor of Science in Architecture (International Program) Academic Year 2022 School of Architecture, Art, and Design", "โครงการอาชีวะพรี่เมี่ยม (ระดับ ปวส.ต่อปริญญาตรี) รอบ 2", "Direct Admission 2 Bachelor of Fine Arts Program in Creative Arts and Curatorial Studies (International Program) Academic Year 2022 School of Architecture, Art, and Design", "Direct Admission 3 Bachelor of Science in Architecture (International Program) Academic Year 2022 School of Architecture, Art, and Design"],
      course: ['หลักสูตรนานาชาติ', 'หลักสูตรไทย'],
      etc: '',
    }),
}
</script>
