
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Views/Home';
import AboutUs from './Views/AboutUs';
import Courses from './Views/Courses';
import CourseDetail from './Views/CourseDetail';
import Login from './Views/Login/Login.jsx';
import Register from './component/Register/Register';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Admin from './Views/Admin/Admin';
import AdminDashboard from './Views/AdminDashboard/AdminDashboard';
import EnrollForm from './Views/EnrollForm/EnrollForm';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courseDetail" element={<CourseDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/admindashboard' element={<AdminDashboard/>}></Route>
      <Route path='/AdmissionForm' element={<EnrollForm/>}></Route>
    </Routes>
  );
}

export default App;
