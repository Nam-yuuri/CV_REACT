import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./Routes/index.js";
import { DefaultLayout } from "./component/Layout";
import { Fragment } from "react";

import Left from "./component/Layout/ComponentLayout/Left/Left.js";
import Right from "./component/Layout/ComponentLayout/Right/Right.js";

function App() {
  return (
    <Router>
      <div className="App" style={{display: 'flex', justifyContent: 'space-between'}}>
        <div><Left/></div>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;

            let Layout = DefaultLayout;

            // if (route.layout) {
            //   Layout = route.layout;
            // } else if (route.layout === null) {
            //   Layout = Fragment;
            // }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  // <Layout> 
                    <Page />
                  // </Layout>
                }
              />
            );
          })}
        </Routes>
        <div><Right/></div>
      </div>
    </Router>
  );
}

export default App;
