import React, { Suspense } from 'react';
import { Route, Routes} from 'react-router-dom';
import routers from './routers';

const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {routers.map((route, index) => (
        <Route
          path={route.path}
          element={<route.component />}
          key={index}
        />
      ))}
    </Routes>
  </Suspense>
  );
};

export default Router;
