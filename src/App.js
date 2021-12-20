import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Fundraising from './components/Donations';
import { animated, useSpring } from '@react-spring/web';

function App() {
  const style = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 }
  })

  return (
    <animated.div className="App" style={style}>
      <Header />
      <main>
        <Fundraising days={"four"} goal={5000} />
      </main>
      <Footer />
    </animated.div>
  );
}

export default App;
