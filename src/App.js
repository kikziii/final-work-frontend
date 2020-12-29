import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Articles from './Views/Articles';
import Home from './Views/Home';
import Chat from './Views/Chat';
import Register from './Views/Register';
import Article from './Views/Article';
import AboutUs from './Views/AboutUs';
import View404 from './Views/View404';


function App() {
  return (
    <div>
      <Router>
        <Header />

        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/articles">
              <Articles />
            </Route>
            <Route path="/article/:articleId">
              <Article />
            </Route>
            <Route path="/chat">
              <Chat />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/about-us">
              <AboutUs />
            </Route>
            <Route path="/404">
              <View404 />
            </Route>
          </Switch>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
