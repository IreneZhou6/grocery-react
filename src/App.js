import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Base from './routes/base/Base.component.js';
import Home from './routes/home/Home.component';
import Shop from './routes/shop/Shop.component';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Base />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
