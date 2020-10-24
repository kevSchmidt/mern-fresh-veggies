import React from 'react';

/* React Router Dom */
import { Route } from 'react-router-dom';

/* Component Imports */
import Navbar from 'components/farmer/navbar/navbar.component';
import ProfileAdmin from 'components/farmer/profile/profile.component';
import Stock from 'components/farmer/stock/stock.component';
import Aside from 'components/farmer/aside/asidebar.component';
import FarmerSettings from 'components/farmer/settings/settings.component';


/* Styles */
import './farmer.admin.page.styles.scss';

// farmer's configuration is available here

/**
 * Using React.memo
 * We don't need to reload the parent every time the children update
 */
const FarmerAdmin = React.memo(({ match, user }) => {
  const { data, jwt } = user;

  return (
    <>
      <Navbar {...data} />
      <section className="farmer-admin">
        <Aside {...data}/>
        <Route exact path={`${match.path}`} render={() => <ProfileAdmin {...data} jwt={jwt} />} />
        <Route path={`${match.path}/stock`} render={() => <Stock jwt={jwt} />} />
        <Route path={`${match.path}/settings`} render={() => <FarmerSettings jwt={jwt} />} />
      </section>
    </>
  );
});

export default FarmerAdmin;
