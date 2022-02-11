<template>
  <div>
    <b-row>
      <b-card-group
        class="col-md-2 name"
        v-for="company in companies"
        :key="company.id"
        :company="company"
      >
        <b-card
          :img-src="company.logo"
          img-alt="Image"
          img-width="150"
          img-height="150"
          class="mb-2 img"
        >
          <center>
            <b
              ><a
                href="https://bootstrap-vue.org/docs/components/list-group"
                class="name-link"
                >{{ company.company_name }}</a
              ></b
            >
            <br />
            {{ company.industry }}
          </center>
        </b-card>
      </b-card-group>
    </b-row>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  name: "Company",
  props: ["company"],
  data() {
    return {};
  },
  mounted() {
    console.log("comapany.vue", this.company);
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
    },
  },
};
</script>
<style scoped>
.name-link {
  font-size: 1rem;
  color: black;
  font-style: bold;
}

.img {
  background-color: #eaeaea;
  max-width: 20rem;
}
</style>