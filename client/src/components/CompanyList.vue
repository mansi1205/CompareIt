<template>
  <div class="home">
    <header>
      <center>
        <b-button class="button" @click="createLink()">
          <b-icon icon="person-plus-fill"></b-icon>To add your company click
          here
        </b-button>
      </center>
    </header>
    <company></company>
  </div>
</template>

<script>
import Company from "./Company";
import gql from "graphql-tag";

export default {
  name: "CompanyList",
  components: { Company },
  data() {
    return {
      // Initialize your apollo data
      company: "",
    };
  },
  methods: {
    createLink() {
      this.$router.replace("/addcompany");
    },
  },
  apollo: {
    // Simple query that will update the 'hello' vue property
    companies: {
      query: gql`
        query companies {
          companies {
            id
            company_name
            logo
            industry
          }
        }
      `,
      update(data) {
        console.log("comapnyList,45", data);
        return data.companies;
      },
    },
  },
};
</script>
<style scoped>
.home {
  padding: 10px 10px 10px 10px;
}

.button {
  margin-bottom: 10px;
}
</style>