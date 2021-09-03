
import { Switch } from 'react-router-dom';
import './App.css';

import Private from './routers/PrivateRouts';
import Public from "./routers/PublicRouts"


import SignupP from './pages/signup/signup';
import LoginP from './pages/login/login';
import FeedP from './pages/feed/feed';
import ProfileP from './pages/profile/profile';

function App() {

  
  return (
    <div className="App">
        <Switch>  
          <Private path="/" component={FeedP} exact/>
          <Private path="/profile/:username" component={ProfileP} />
          <Public path="/login" component={LoginP} />
          <Public path="/signup" component={SignupP} />
        </Switch>
    </div>
  );
}

export default App;
