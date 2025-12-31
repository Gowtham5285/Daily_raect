import ChristmasTree from './ChristmasTree.jsx'
import { Routes, Route } from 'react-router-dom';
import ColorPicker from './ColorPicker.jsx';
import User from './components/User.jsx';
import NavBar from './components/NavBar.jsx';
function App() {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path='/christmas' element={<ChristmasTree />} />
        <Route path='/color' element={<ColorPicker />} />
        <Route path='*' element={<h1>Incorrect Route</h1>} />
        <Route path='/users/:name' element={<User />} />
      </Routes>
    </>
  );
}

export default App
