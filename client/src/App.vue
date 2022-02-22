
<template>
  <div>
    <header>
      <header-comp />
    </header>

    <router-view></router-view>
    <footer>
      <footer-comp />
    </footer>
  </div>
</template>

<script>
import CompanyList from "./components/CompanyList.vue";
import AddCompany from "./components/AddCompany.vue";
import HeaderComp from "./components/HeaderComp.vue";
import FooterComp from "./components/FooterComp.vue";
import CompanyForm from "./components/CompanyForm.vue";
import CompanyDetails from "./components/CompanyDetails.vue"
import Compare from "./components/Compare.vue";
export default {
  name: "App",
  components: {
    CompanyList,
    AddCompany,
    HeaderComp,
    FooterComp,
    CompanyForm,
    CompanyDetails,
    Compare
  },
};
</script>

<style scoped>

footer {
  background-color: #eaeaea;
  color: black;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
}
</style> 
