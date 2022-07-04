import './App.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Main from '../../Components/Main/Main';
import store from '../../store';
import _ from 'lodash';

function App() {
  const { contacts, user, activeUserId } = store.getState()

  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main user={user} activeUserId={activeUserId} />
    </div>
  );
}

export default App;
