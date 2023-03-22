import React, { FC } from 'react';
import './app.css';
import Parcel from 'single-spa-react/parcel';

const App: FC = () => {
  return (
    <>
      <div id="wrap">
        <div id="left-panel">
          <h2>App Left Panel</h2>
        </div>
        <div id="right-panel">
          <h2>App Right Panel</h2>
          <p>
            this is a <b>single-spa-react/parcel</b> demo
          </p>
          <hr />
          {/** call parcel app */}
          {/* @ts-ignore */}
          <Parcel
            config={() => import('@example/parcel1')}
            customProp1="Parent prop1"
            wrapWith="div"
            wrapStyle={{ color: 'blue' }}
            handleError={(err) => console.log(err)}
            parcelDidMount={() => console.log('React parcel mounted')}
          />
        </div>
      </div>
    </>
  );
};

export default App;
