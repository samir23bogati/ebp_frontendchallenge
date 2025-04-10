import React from 'react';
import { Suspense } from 'react';

const HomePage = React.lazy(() => import('./pages/HomePage'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePage />
    </Suspense>
  );
}
export default App;