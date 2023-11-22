import './App.css';

import { RecoilRoot } from 'recoil';

import RouterPage from './router/RouterPage';
function App() {
    return (
        <RecoilRoot>
          <div className="container">
            <RouterPage />
          </div>
        </RecoilRoot>
    );
}

export default App;
