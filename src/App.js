import React from 'react';
import { DataProvider } from './DataContext';
import DataEditor from './DataEditor';

const App = () => {
  return (
    <DataProvider>
      <div>
        <DataEditor />
      </div>
    </DataProvider>
  );
};

export default App;
