<template>
  <div class="frm">
    <form>
      <vue-form-generator :schema="schema" :model="model"> </vue-form-generator>
    </form>
  </div>
</template>


<script>
import VueFormGenerator from "vue-form-generator";
import "vue-form-generator/dist/vfg.css";
export default {
  name: "CompanyForm",
  data() {
    return {
      model: {},
      schema: {
        fields: [
          {
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
            placeholder: "E-mail address",
          },
          {
            type: "input",
            inputType: "submit",
            model: "submit",
            placeholder: "Next",
          },
        ],
      },
    };
  },

  // methods: {
  //   createuser() {
  //     this.$apollo
  //       .mutate({
  //         mutation: gql`
  //           mutation Addusers($name: String, $email: String) {
  //             Adduser(name: $name, email: $email) {
  //               name
  //               email
  //             }
  //           }
  //         `,
  //         variables: {
  //           name: this.name,
  //           email: this.email,
  //         },
  //       })
  //       .then((result) => {
  //         console.log(result);
  //       })
  //       .then((response) => {
  //         this.$router.replace("/companyform");
  //     });
  //   },
  // },
};
</script>

<style>
</style>