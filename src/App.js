import Style from './Style.css/App.css';
import Navigation from './components/Navigation';
import Showcase from './components/Showcase';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accommodation from './components/Accommodation';
import Experience from './components/Experience';
import Overview from './components/Overview';
import Services from './components/Services';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navigation />
      <Showcase />
      <Accommodation />
      <Experience />
      <Overview />
      <Services />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
