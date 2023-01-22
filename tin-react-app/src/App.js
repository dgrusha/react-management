
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

import LoginForm from "./components/other/login"
import ProtectedRoute from "./components/ProtectedRoute";


import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import { useState } from "react";


function App() {

    const [user, setUser] = useState()

    const handleLogin = (user) => {
        sessionStorage.setItem('user', user);
        setUser(user);
        console.log(user);
    }

    const handleLogout = () => {
        sessionStorage.removeItem('user')
        setUser(undefined)
    }


  return (
      <>
          <Header/>
          <Routes>
              <Route path="/" element={<MainPage/>} />
              <Route path="emp">
                  <Route index={true} element={<ProtectedRoute><Emp/></ProtectedRoute>} />
                  <Route path="/emp/details/:empId" element={<ProtectedRoute><EmpDesc /></ProtectedRoute>} />
                  <Route path="add/" element={<ProtectedRoute><EmpForm /></ProtectedRoute>} />
                  <Route path="edit/:empId" element={<ProtectedRoute><EmpForm /></ProtectedRoute>} />
              </Route>
              <Route path="dept">
                  <Route index={true} element={<ProtectedRoute><Dept /></ProtectedRoute>} />
                  <Route path="details/:deptId" element={<ProtectedRoute><DeptDesc /></ProtectedRoute>} />
                  <Route path="add/" element={<ProtectedRoute><DeptForm /></ProtectedRoute>} />
                  <Route path="edit/:deptId" element={<ProtectedRoute><DeptForm /></ProtectedRoute>} />
              </Route>
              <Route path="agency">
                  <Route index={true} element={<ProtectedRoute><Agency /></ProtectedRoute>} />
                  <Route path="details/:spec_id" element={<ProtectedRoute><AgencyDesc /></ProtectedRoute>} />
                  <Route path="add/" element={<ProtectedRoute><AgencyForm /></ProtectedRoute>} />
                  <Route path="edit/:spec_id" element={<ProtectedRoute><AgencyForm /></ProtectedRoute>} />
              </Route>
              <Route path="deptEmp">
                  <Route index={true} element={<ProtectedRoute><DeptEmp /></ProtectedRoute>} />
                  <Route path="details/:deId1/:deId2" element={<ProtectedRoute><DeptEmpDesc /></ProtectedRoute>} />
                  <Route path="add/" element={<ProtectedRoute><DeptEmpForm /></ProtectedRoute>} />
                  <Route path="edit/:deId1" element={<ProtectedRoute><DeptEmpForm /></ProtectedRoute>} />
              </Route>
              <Route path="login">
                  <Route index={true} element={<LoginForm handleLogin={handleLogin} handleLogout={handleLogout} user={user}/>} />
              </Route>
          </Routes>
          <Footer />
      </>
  );
}

export default App;
