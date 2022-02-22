<template>
  <div >
    <div>
    <b-row>
      <b-col>
        <img
          class="image"
          src="https://img.freepik.com/free-vector/company-concept-illustration_114360-2581.jpg?size=338&ext=jpg"
          alt=""
          width="700px"
        />
      </b-col>
      <b-col>
        <h2 class="heading">Company Details</h2>
        <form @submit.prevent="addCompany">
          <vue-form-generator :schema="schema" :model="model">
          </vue-form-generator>
          <b-button class="button" type="submit">Submit</b-button>
        </form>
      </b-col>
    </b-row>
    </div>
    
  </div>
</template>

<script>
import VueFormGenerator from "vue-form-generator";
import "vue-form-generator/dist/vfg.css";
import gql from "graphql-tag";
export default {
  name: "CompanyForm",
  data() {
    
    return {

      company_id: this.$route.query.company_id,
      companies: '',
      company:'',
      model: {
          
      },
      schema: {
        fields: [
          
          {
            type: "input",
            inputType: "text",
            label: "Company Name",
            model: "companyName",
            required: true,
            placeholder: "Company's Name",
          },
          {
            type: "input",
            inputType: "text",
            label: "Website",
            model: "website",
            required: true,
            placeholder: "Company's Website",
            validator: VueFormGenerator.validators.string,
          },
          {
            type: "input",
            inputType: "text",
            label: "Company's Logo",
            model: "logo",
            required: true,
            placeholder: "Add URL of company's logo",
            validator: VueFormGenerator.validators.string,
          },
          {
            type: "input",
            inputType: "text",
            label: "Number of Employees",
            model: "noOfEmployee",
            required: true,
            placeholder: "Number of Employees in the company",
            validator: VueFormGenerator.validators.number,
          },
          {
            type: "input",
            inputType: "text",
            label: "Industry",
            model: "industry",
            required: true,
            placeholder: "Industry",
            validator: VueFormGenerator.validators.string,
          },
          {
            type: "checkbox",
            label: "Health insurance",
            model: "healthInsurance",
            default: false,
          },
          {
            type: "input",
            inputType: "text",
            label: "Sum insured",
            model: "sumInsured",
            required: true,
            placeholder: "in ₹",
            hint: "Please enter sum insured",
            visible: function (model) {
              return model && model.healthInsurance == true;
            },
            validator: VueFormGenerator.validators.number,
          },
          {
            type: "checkbox",
            label: "Family covered",
            model: "familyCovered",
            default: false,
            hint: "Does your insurance cover family? If yes then tick the box",
            visible: function (model) {
              return model && model.healthInsurance == true;
            },
          },
          {
            type: "checkbox",
            label: "Parents covered",
            model: "parentsCovered",
            default: false,
            hint: "Does your insurance cover your parents? If yes then tick the box",
            visible: function (model) {
              return model && model.healthInsurance == true;
            },
          },
          {
            type: "checkbox",
            label: "Maternity covered",
            model: "maternityCovered",
            default: false,
            hint: "Does your insurance cover maternity? If yes then tick the box",
            visible: function (model) {
              return model && model.healthInsurance == true;
            },
          },

          {
            type: "switch",
            label: "Gym membership",
            model: "gymMembership",
            default: false,
            textOn: "Included",
            textOff: "Excluded",
          },
          {
            type: "switch",
            label: "Free doctor-on-call",
            model: "freeDoctorOnCall",
            default: false,
            textOn: "Available",
            textOff: "Unavailable",
          },
          {
            type: "input",
            inputType: "text",
            label: "Number of paid leaves",
            model: "noOfPaidLeaves",
            required: true,
            validator: VueFormGenerator.validators.number,
          },
          {
            type: "switch",
            label: "Flexible work timings",
            model: "flexibleWorkTimings",
            default: false,
            textOn: "Available",
            textOff: "Unavailable",
          },
          {
            type: "switch",
            label: "Remote-work friendly ",
            model: "remoteWorkFriendly",
            default: false,
            textOn: "Yes",
            textOff: "No",
          },
        ],
      },
    };
  },

  watch: {
    companyId(val) {
      this.$apollo
        .mutate({
          mutation: gql`
            mutation Addusers($id: String, $companyId: String) {
              Adduser(id: $id, companyId: $companyId) {
                id
                name
                email
                companyId
              }
            }
          `,
          variables: {
            id: "this.$route.query.user_id",
            companyId: val,
          },
        })
        .then((response) => {
          this.$router.push("/companyDetails?company_id=" + val);
        });
    },
  },
  apollo: {
    companies:{
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
      update(data) {
          console.log("comapnyForm", data);
          this.model=data.companies[0]
          
          return data.companies;
        },
    },
  },
  methods: {
    addCompany() {
      this.$apollo
        .mutate({
          mutation: gql`
            mutation AddCompany(
              $companyId: String
              $companyName: String
              $website: String
              $logo: String
              $noOfEmployee: String
              $industry: String
              $healthInsurance: Boolean
              $sumInsured: String
              $familyCovered: Boolean
              $parentsCovered: Boolean
              $maternityCovered: Boolean
              $gymMembership: Boolean
              $freeDoctorOnCall: Boolean
              $noOfPaidLeaves: String
              $flexibleWorkTimings: Boolean
              $remoteWorkFriendly: Boolean
            ) {
              AddCompany(
                companyId: $companyId
                companyName: $companyName
                website: $website
                logo: $logo
                noOfEmployee: $noOfEmployee
                industry: $industry
                healthInsurance: $healthInsurance
                sumInsured: $sumInsured
                familyCovered: $familyCovered
                parentsCovered: $parentsCovered
                maternityCovered: $maternityCovered
                gymMembership: $gymMembership
                freeDoctorOnCall: $freeDoctorOnCall
                noOfPaidLeaves: $noOfPaidLeaves
                flexibleWorkTimings: $flexibleWorkTimings
                remoteWorkFriendly: $remoteWorkFriendly
              ) {
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
          variables: {
            companyId:this.company_id,
            companyName: this.model.companyName,
            website: this.model.website,
            logo: this.model.logo,
            noOfEmployee: this.model.noOfEmployee,
            industry: this.model.industry,
            healthInsurance: this.model.healthInsurance,
            sumInsured: this.model.sumInsured,
            familyCovered: this.model.familyCovered,
            parentsCovered: this.model.parentsCovered,
            maternityCovered: this.model.maternityCovered,
            gymMembership: this.model.gymMembership,
            freeDoctorOnCall: this.model.freeDoctorOnCall,
            noOfPaidLeaves: this.model.noOfPaidLeaves,
            flexibleWorkTimings: this.model.flexibleWorkTimings,
            remoteWorkFriendly: this.model.remoteWorkFriendly,
          },
        })

        .then((response) => {
          console.log(response);
          this.companyId = response.data.AddCompany.companyId;
        });
    },
  },
  
};
</script>

<style scoped>
.heading {
  padding: 10px, 10px, 10px, 10px;
}
.button {
  margin-bottom: 100px;
}
</style>
