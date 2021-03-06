import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <Router>
      <Header/>
      <main>
        <Container>
          <Route path="/" component={HomeScreen} exact/>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
