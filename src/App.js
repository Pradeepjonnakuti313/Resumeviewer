import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Form from './Form';
import List from './List';
import Detail from './Detail';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                {/* <Form /> */}
                <List />
              </div>
            }
          />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
