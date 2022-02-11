import Vue from "vue";
import Router from "vue-router";
import CompanyList from "@/components/CompanyList";
import Company from "@/components/Company";
import AddCompany from "@/components/AddCompany";
import CompanyForm from "@/components/CompanyForm"
Vue.use(Router);

const addcompany = { template: "<div>AddCompany</div>" };
const companydetails={template: "<div>CompanyForm</div>"}
const routes = [
  { path: "/", component: CompanyList },
  { path: "/addcompany", component: AddCompany },
  { path: "/companyform", component: CompanyForm }

];
export default new Router({
  routes
});
