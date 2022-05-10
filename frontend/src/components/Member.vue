<template>
  <v-container>
    <v-row class="text-h5 font-weight-bold">
      <v-col cols="2">
        <p>First name</p>
      </v-col>
      <v-col cols="2">
        <p>Last name</p>
      </v-col>
      <v-col cols="1 text-center">
        <p>Age</p>
      </v-col>
    </v-row>
    <v-row class="d-flex align-center" v-for="member in members" :key="member._id">
      <v-col cols="2">
        <p>{{ member.firstName }}</p>
      </v-col>
      <v-col cols="2">
        <p>{{ member.lastName }}</p>
      </v-col>
      <v-col cols="1 text-center" >
        <p>{{ member.age }}</p>
      </v-col>
      <v-col cols="1">
        <v-btn 
          color="black"
          elevation="2"
          rounded
          dark
          width="100%"
          @click="editPopup(member)"
        >
          edit
        </v-btn>
      </v-col>
      <v-col cols="1">
        <v-btn 
          color="error"
          elevation="2"
          rounded
          dark
          width="100%"
          @click="confirmDel(member)"
        >
          delete
        </v-btn>
      </v-col>
    </v-row>
    <!-- delete -->
    <v-dialog
      v-model="delDialog"
      width="500"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2 justify-center align-center">
          Delete
        </v-card-title>

        <v-card-text class="mt-5">
          Do you sure to delete {{ delItem.firstName + " " + delItem.lastName }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            @click="delDialog = false"
          >
            cancel
          </v-btn>
          <v-btn
            color="error"
            text
            @click="delMember(delItem._id)"
          >
            comfirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- edit -->
    <v-dialog
      v-model="editDialog"
      width="500"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2 justify-center align-center">
          Edit Member
        </v-card-title>

        <v-card-text class="mt-5">
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="editItem.firstName"
                label="First Name"
                outlined
                :placeholder="editItem.firstName"
              />
              <v-text-field
                v-model="editItem.lastName"
                label="Last Name"
                outlined
                :placeholder="editItem.lastName"
              />
              <v-text-field
                v-model="editItem.age"
                label="Age"
                outlined
                :placeholder="editItem.age"
              />
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="error"
            text
            @click="editDialog = false"
          >
            cancel
          </v-btn>
          <v-btn
            color="success"
            text
            @click="editMember(editItem._id)"
          >
            comfirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import axios from "@/plugins/axios";

export default {
  name: "Member",

  data: () => ({
    members: [],
    delDialog: false,
    delItem: {},
    editDialog: false,
    editItem: {},
  }),
  mounted() {
    this.getMembers()
  },
  methods: {
    async getMembers() {
      await axios
        .get("/member/all")
        .then((response) => this.members = response.data)
    },
    async delMember(id) {
      await axios
        .delete("/member/del", {headers: { id: id }})
        .then((response) => {
          console.log(response)
          this.delDialog = false
          this.delItem = {}
        })
    },
    confirmDel(member) {
      this.delDialog = true
      this.delItem = member
    },
    async editMember(id) {
      await axios
        .put("/member/edit", {
          id: id,
          firstName: this.editItem.firstName,
          lastName: this.editItem.lastName,
          age: this.editItem.age
        })
        .then((response) => {
          console.log(response)
          this.getMembers
          this.editItem = {}
          this.editDialog = false
        })
    },
    editPopup(member) {
      this.editDialog = true
      this.editItem = member
    },
  }
}
</script>
