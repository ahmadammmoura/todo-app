import ListContext from './context/list';
import ToDo from './components/todo.js';
import Setting from './components/Setting';
import SettingContext from './context/settings';
import Navigation from './components/Nav';
import LogIn from './components/LogIn';
import AuthContext from './context/auth';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
export default function App() {
  return (
    <BrowserRouter>
      <AuthContext>
        
        <Navigation />
        <LogIn />
        <Switch>
          <Route exact path="/">
            <ListContext>
              <SettingContext>
                <ToDo />
              </SettingContext>
            </ListContext>
          </Route>
          <Route exact path="/setting">
            <ListContext>
              <SettingContext>
                <Setting />
              </SettingContext>
            </ListContext>
          </Route>
        </Switch>
      </AuthContext>
    </BrowserRouter>
  );
}
