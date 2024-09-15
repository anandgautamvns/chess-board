import React, { Suspense, lazy } from 'react';
import './App.css';
import { knightPositionAxis } from './pages/type';

const Page = lazy(() => import('../src/pages'));
interface Props {
  knightPosition: knightPositionAxis
}
const App: React.FC<Props> = (props) => {
  const { knightPosition } = props;
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Page knightPosition={knightPosition} />
      </Suspense>
    </div>
  );
}

export default App;
