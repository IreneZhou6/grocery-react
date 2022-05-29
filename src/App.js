import './App.scss';
import Banners from './components/banners/Banners';
import Navbar from './components/navbar/Navbar';
import Slide from './components/slide/Slide';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slide />
      <Banners />
    </div>
  );
}

export default App;
