<template>
  <div>
    <div
      v-for="company in companies"
      :key="company.companyId"
      :company="company"
      class="details"
    >
      <b-card
        no-body
        style="max-width: 20rem"
        :img-src="company.logo"
        img-alt="Image"
        img-top
      >
        <template #header>
          <h4 class="mb-0">{{ company.companyName }}</h4>
        </template>
        <!-- <b-card-body> -->
        <!-- <b-card-title>Details:</b-card-title> -->
        <!-- <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title> -->
        <!-- </b-card-body> -->

        <b-list-group flush>
          <b-list-group-item
            ><b>Industry:</b>{{ company.industry }}</b-list-group-item
          >
          <b-list-group-item
            ><b>Number of employees:</b>{{ company.noOfEmployee}}</b-list-group-item
          >
          <b-list-group-item><b>Benefits:</b> </b-list-group-item>
          <b-list-group-item v-if="company.healthInsurance == true"
            ><b
              ><b-icon icon="check" animation="fade" font-scale="2"></b-icon
              >Health Insurance</b
            >
          </b-list-group-item>
          <b-list-group-item v-if="company.healthInsurance == true"
            ><b
              ><b-icon icon="check" animation="fade" font-scale="2"></b-icon>Sum
              insured: {{ company.sumInsured }}</b
            ></b-list-group-item
          >
          <b-list-group-item v-if="company.familyCovered == true"
            ><b
              ><b-icon icon="check" animation="fade" font-scale="2"></b-icon
              >Family covered</b
            >
          </b-list-group-item>
          
          <b-list-group-item v-if="company.parentsCovered == true"
            ><b
              ><b-icon icon="check" animation="fade" font-scale="2"></b-icon
              >Parents covered</b
            >
          </b-list-group-item>
          <b-list-group-item v-if="company.maternityCovered == true"
            ><b
              ><b-icon icon="check" animation="fade" font-scale="2"></b-icon
              >Maternity covered</b
            >
          </b-list-group-item>
          
          <b-list-group-item v-if="company.gymMembership == true"
            ><b><b-icon icon="check" animation="fade" font-scale="2"> </b-icon
              >Gym membership</b
            ></b-list-group-item
          >
          <b-list-group-item v-if="company.freeDoctorOnCall == true"
            ><b><b-icon icon="check" animation="fade" font-scale="2"> </b-icon
              >Free Doctor On-call </b
            ></b-list-group-item
          >
          <b-list-group-item v-if="company.flexibleWorkTimings == true"
            ><b><b-icon icon="check" animation="fade" font-scale="2"> </b-icon
              >Flexible Work Timings</b
            ></b-list-group-item
          >
          <b-list-group-item v-if="company.remoteWorkFriendly == true"
            ><b><b-icon icon="check" animation="fade" font-scale="2"> </b-icon
              >Remote Work friendly</b
            ></b-list-group-item
          >
          <b-list-group-item
            ><b
              ><b-icon icon="check" animation="fade" font-scale="2"> </b-icon
              >Number of paid leaves: {{ company.noOfPaidLeaves }}</b
            ></b-list-group-item
          >
        </b-list-group>

        <b-card-body>
          <a :href="company.website" class="card-link">Website</a>
          <a :href="'#/compare/?company_id='+ company_id" class="card-link">Compare</a>
          <a :href="'#/companyForm/?company_id='+company_id" class="card-link">Edit</a>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>
<script>
import gql from "graphql-tag";
export default {
  name: "CompanyDetails",
  props: ["company"],
  data() {
    return {
      company_id: this.$route.query.company_id,
    };
  },
 
  apollo: {
    companies: {
      query: gql`
        query companies($companyId: String) {
          companies(companyId: $companyId) {
            companyId
            companyName
            website
            logo
            noOfEmployee
            industry
            healthInsurance
            sumInsured
            familyCovered
            parentsCovered
            maternityCovered
            gymMembership
            freeDoctorOnCall
            noOfPaidLeaves
            flexibleWorkTimings
            remoteWorkFriendly
          }
        }
      `,
      variables() {
        return {
          companyId: this.company_id,
        };
      },
    },
  },
};
</script>
<style scoped>
  .details {
  margin-bottom: 100px;
}
</style>
