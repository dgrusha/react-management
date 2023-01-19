
import './App.css';
import Header from "./components/fragments/header";
import MainPage from "./components/other/main";
import Footer from "./components/fragments/footer";

import Emp from "./components/emp/emp";
import {EmpDesc} from "./components/emp/emp_desc";
import EmpForm from "./components/emp/emp_form";

import Dept from "./components/dept/dept";
import DeptDesc from "./components/dept/dept_desc";
import DeptForm from "./components/dept/dept_form";

import Agency from "./components/agency/agency";
import AgencyDesc from "./components/agency/agency_desc";
import AgencyForm from "./components/agency/agency_form";

import DeptEmp from "./components/dept-emp/deptEmp";
import DeptEmpDesc from "./components/dept-emp/deptEmp_desc";
import DeptEmpForm from "./components/dept-emp/deptEmp_form";


import {Link, Routes, Route, useNavigate} from 'react-router-dom';


function App() {
  return (
      <>
          <Header />
          <Routes>
              <Route path="/" element={<MainPage/>} />
              <Route path="emp">
                  <Route index={true} element={<Emp />} />
                  <Route path="/emp/details/:empId" element={<EmpDesc />} />
                  <Route path="add/" element={<EmpForm />} />
                  <Route path="edit/:empId" element={<EmpForm />} />
              </Route>
              <Route path="dept">
                  <Route index={true} element={<Dept />} />
                  <Route path="details/:deptId" element={<DeptDesc />} />
                  <Route path="add/" element={<DeptForm />} />
                  <Route path="edit/:deptId" element={<DeptForm />} />
              </Route>
              <Route path="agency">
                  <Route index={true} element={<Agency />} />
                  <Route path="details/:spec_id" element={<AgencyDesc />} />
                  <Route path="add/" element={<AgencyForm />} />
                  <Route path="edit/:spec_id" element={<AgencyForm />} />
              </Route>
              <Route path="deptEmp">
                  <Route index={true} element={<DeptEmp />} />
                  <Route path="details/:empId" element={<DeptEmpDesc />} />
                  <Route path="add/" element={<DeptEmpForm />} />
                  <Route path="edit/:empId" element={<DeptEmpForm />} />
              </Route>
          </Routes>
          <Footer />
      </>
  );
}

export default App;
