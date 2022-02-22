import Vue from "vue";
import Router from "vue-router";
import CompanyList from "@/components/CompanyList";
import Company from "@/components/Company";
import AddCompany from "@/components/AddCompany";
import CompanyForm from "@/components/CompanyForm";
import CompanyDetails from "@/components/CompanyDetails";
import Compare from "@/components/Compare"
Vue.use(Router);

const addcompany = { template: "<div>AddCompany</div>" };
const companydetails={template: "<div>CompanyDetails</div>"}
const companyform={template: "<div>companyForm</div>"}
const compare={template: "<div>Compare</div>"}
  // make sure to add a prop named exactly like the route param

const routes = [
  { path: "/", component: CompanyList },
  { path: "/addcompany", component: AddCompany },
  { path: "/companyform", component: CompanyForm },
  {path:"/companydetails", component: CompanyDetails},
  {path:"/compare", component:Compare}
  

];
export default new Router({
  routes
});
