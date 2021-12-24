import { animated, useSpring } from '@react-spring/web';
import Header from './components/Header';
import Donations from './components/Donations';
import Footer from './components/Footer';
import './App.scss';

function App() {
  const fadeIn = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 }
  })

  return (
    <animated.div className="App" style={fadeIn}>
      <Header />
      <main>
        <Donations days={"four"} goal={5000} />
      </main>
      <Footer />
    </animated.div>
  );
}

export default App;
