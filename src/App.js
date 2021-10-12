import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Layout from './components/nav/sideBar/SideBar';
import Dashboard from './routes/dashboard/Dashboard';
import User from './routes/user/User';
import Fellow from './routes/fellow/Fellow';
import Activity from './routes/activity/Activity';
import Program from './routes/program/Program';
import AddActivity from './routes/program/AddActivity';
import AssignFellow from './routes/user/Assign2Fellow';
import AssignActivity from './routes/program/AssignActivity';
import AddFellow from './routes/fellow/AddFellow';
//import fellow dashboard components
import FellowDashboard from './routes/middleware/fellow/Dashboard';

function App() {
  return (
    <>

      <Switch>
        <Layout>
          {/* Main Module */}
          <Route exact path={["/", "/dashboard"]} component={Dashboard} />
          <Route exact path="/user" component={User} />
          <Route exact path="/fellow" component={Fellow} />
          <Route exact path="/program" component={Program} />
          <Route path="/activity" component={Activity} />
          <Route path="/program/assign/:id" component={AssignActivity} />
          <Route path="/user/assign/:id" component={AssignFellow} />
          <Route path="/fellow/add" component={AddFellow} />
          <Route path="/fellow/dashboard" component={FellowDashboard} />
        </Layout>
      </Switch>

    </>
  );
}

export default App;


