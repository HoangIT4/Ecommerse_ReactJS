import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { routers, useRouters } from './allRouters';
import UserPage from '@pages/UserPage/UserPage';




const Router = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route>
          {routers.map((route, index) => (
            <Route
              path={route.path}
              element={<route.component />}
              key={index}
            />
          ))}
          </Route>
          <Route>
            {useRouters.map((route, index) => (
              <Route 
              path={route.path} 
              element={<UserPage>{<route.component/> }</UserPage>} 
              key={index} exact={true} />
            ))}
          </Route>
        </Routes>
    </Suspense>
    </React.Fragment>
  );
};

export default Router;
