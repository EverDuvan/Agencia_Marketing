import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Error404 from './containers/errors/Error404';
import Home from './containers/pages/Home';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Error404/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>

  );
}

export default App;
