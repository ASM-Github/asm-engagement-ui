import { Routes, Route, BrowserRouter as Router, Outlet, Navigate } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Login from './auth/Login/Login';
import Dashboard from './pages/admin/dashboard/Dashboard';
import Users from './pages/admin/users/Dashboard';
import Fellows from './pages/admin/fellows/Dashboard';
import Programs from './pages/admin/programs/Dashboard';
import Activities from './pages/admin/activities/Dashboard'
import ManageFellows from './pages/admin/fellows/List';
import ManageUsers from './pages/admin/users/List';
import ManagePrograms from './pages/admin/programs/List'
import ManageActivities from './pages/admin/activities/List';
import ViewUser from './pages/admin/users/User';
import ViewProgram from './pages/admin/programs/ViewProgram';
import CreateNewUser from './pages/admin/users/CreateUser';
import CreateNewFellow from './pages/admin/fellows/CreateFellow';
import CreateNewProgram from './pages/admin/programs/CreateProgram'
import CreateNewActivity from './pages/admin/activities/CreateActivity'
import FellowSuccess from './pages/admin/fellows/Success';
import ProgramSuccess from './pages/admin/programs/SuccessPage';
import ActivitySuccess from './pages/admin/activities/Success';

import ImportProgrom from './pages/admin/programs/ImportProgram'

import ProgramsRequested from './pages/admin/programs/ProgramsRequested';
import PendingActivities from './pages/admin/activities/PendingActivities';

import AdminViewFellow from './pages/admin/fellows/ViewFellow'

//fellow
import FManagePrograms from './pages/fellow/program/Program'
import FProgram from './pages/fellow/program/ViewProgram'
//import FAddActivity from './fellow/activity/AddActivity'
import ViewFellow from './pages/fellow/profile/Overview'
import ViewFellowActivities from './pages/fellow/profile/Activities'
import ViewFellowPrograms from './pages/fellow/profile/Programs'
import EditFellowProfile from './pages/fellow/profile/EditProfile'
import ViewActivitiesById from './pages/fellow/activity/Activity'

import ManagePerformance from './pages/admin/dashboard/ViewPerformance'

import PrivatePage from './components/pagenotfound/PrivateError'
import PageNotFound from './components/pagenotfound/404'
import { isAuth } from './auth/Login/helpers';
import FellowDashboard from './pages/fellow/dashboard/Dashboard'

import FPendingPrograms from './pages/fellow/dashboard/PendingPrograms'
import FPendingActivities from './pages/fellow/dashboard/PendingActivities'

import FellowSideBar from './components/fellow/sidebar/Sidebar';
import ViewProfileHeader from './pages/fellow/profile/ProfileHeader';
import Sidebar from './components/sidebar/Sidebar';

import './assets/css/index.css';
import './assets/css/color.css'
import './scss/asm.css'
import './assets/css/index.css'

const authSecretariat = false;

function AdminRoutes() {
  const auth = isAuth() && isAuth().user_type === 'admin';
  return auth ?
    <Sidebar>
      <Outlet />
    </Sidebar> :
    <Navigate to="/private-errors" />;
}


function FellowRoutes() {
  const auth = isAuth() && isAuth().user_type === 'fellow';
  return auth ?
    <>
      <FellowSideBar>
        <Outlet />
      </FellowSideBar>
    </> : <Navigate to="/private-errors" />;
}

function FellowProfile() {
  const auth = isAuth() && isAuth().user_type === 'fellow';
  return auth ?
    <>
      <FellowSideBar>
        <ViewProfileHeader>
          <Outlet />
        </ViewProfileHeader>
      </FellowSideBar>
    </> : <Navigate to="/private-errors" />;
}


function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="admin" element={<AdminRoutes />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="user" element={<Users />} />
            <Route path="fellow" element={<Fellows />} />
            <Route path="program" element={<Programs />} />
            <Route path="activity" element={<Activities />} />

            <Route path="user/manage-users" element={<ManageUsers />} />
            <Route path="fellow/manage-fellows" element={<ManageFellows />} />
            <Route path="fellow/manage-performance" element={<ManagePerformance />} />
            <Route path="program/manage-programs" element={<ManagePrograms />} />
            <Route path="activity/manage-activities" element={<ManageActivities />} />

            <Route path="user/add-new" element={authSecretariat ? '' : <CreateNewUser />} />
            <Route path="fellow/add-new" element={<CreateNewFellow />} />
            <Route path="program/add-new" element={<CreateNewProgram />} />
            <Route path="activity/add-new" element={<CreateNewActivity />} />
            <Route path="user/view/:id" element={<ViewUser />} />
            <Route path="program/view/:id" element={<ViewProgram />} />

            <Route path="fellow/add-new/:id/success" element={<FellowSuccess />} />
            <Route path="program/add-new/:id/success" element={<ProgramSuccess />} />
            <Route path="activity/add-new/:id/success" element={<ActivitySuccess />} />

            <Route path="program/manage-requests" element={<ProgramsRequested />} />
            <Route path="activity/manage-requests" element={<PendingActivities />} />

            <Route path="program/import" element={<ImportProgrom />} />

            <Route path="fellow/manage-fellows/view/:id" element={<AdminViewFellow />} />

          </Route>


          <Route path="/private-errors" element={<PrivatePage />} />
          <Route path="/*" element={<PageNotFound />} />

          <Route path="/" element={<Login />} />


          <Route path="" element={<FellowRoutes />}>
            <Route path="fellow/dashboard" element={<FellowDashboard />} />
            <Route path="fellow/manage-programs" element={<FManagePrograms />} />
            <Route path="fellow/manage-programs/:programID" element={<FProgram />} />
            <Route path="fellow/view-profile/edit" element={<EditFellowProfile />} />
            <Route path="fellow/manage-activities/edit" element={<ViewActivitiesById />} />
            {/* pending-lists */}
            <Route path="fellow/programs/pending-list" element={<FPendingPrograms />} />
            <Route path="fellow/activities/pending-list" element={<FPendingActivities />} />
          </Route>

          <Route path="fellow/view-profile" element={<FellowProfile />}>
            <Route path="overview" element={<ViewFellow />} />
            <Route path="programs" element={<ViewFellowPrograms />} />
            <Route path="activities" element={<ViewFellowActivities />} />
          </Route>

        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
