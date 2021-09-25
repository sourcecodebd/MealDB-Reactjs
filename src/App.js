import Header from './components/Header/Header';
import Foods from './components/Foods/Foods';
import Slider from './components/Slider/Slider';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="main-layout">
      <Header />
      <Slider />
      <Foods />
      <Footer />
    </div>
  );
}

export default App;
