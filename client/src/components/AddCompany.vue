<template>
    <b-row>
      <b-col>
        <h3>Employee Details {{userId}}</h3>
        <form @submit.prevent="addUser">
          <vue-form-generator :schema="schema" :model="model">
          </vue-form-generator>
          <b-button type="submit">Submit</b-button>
        </form>
      </b-col>
      <b-col>
        <img class="image"
          src="https://media.istockphoto.com/photos/business-people-negotiating-a-contract-picture-id840610244?k=20&m=840610244&s=612x612&w=0&h=HehJJDTFs3QeNvysCYvBOkHfqmTZHzbPZD116MqFZmc="
          alt="" />
      </b-col>
    </b-row>
</template>


<script>
  import VueFormGenerator from "vue-form-generator";
  import "vue-form-generator/dist/vfg.css";
  import gql from "graphql-tag";
  export default {
    name: "AddCompany",
    data() {
      return {
        user: "",
        model: {},
        schema: {
          fields: [{
              type: "input",
              inputType: "text",
              label: "Name",
              model: "name",
              required: true,
              placeholder: "Name",
              validator: VueFormGenerator.validators.string,
            },
            {
              type: "input",
              inputType: "email",
              label: "E-mail",
              model: "email",
              required: true,
              placeholder: "E-mail address",
              validator: VueFormGenerator.validators.email,
            },
          ],
        },
      };
    },
    computed: {
      userId() {
        console.log(this.$route.query)
        return this.$route.query.user_id
      },
    },

    methods: {
      addUser() {
         this.$apollo
          .mutate({
            mutation: gql `
            mutation Addusers($name: String, $email: String) {
              Adduser(name: $name, email: $email) {
                id
                name
                email
                companyId
              }
            }
          `,
            variables: {
              name: this.model.name,
              email: this.model.email,
            },
          })

          .then((response) => {
            console.log(response)
            this.$router.push("/companyForm?user_id=" + response.data.Adduser.id);
        });
      },
    },
  };

</script>

<style>
  .image {
    padding: 10px 10px 10px 10px;
    height: 100%;
  }

</style>
