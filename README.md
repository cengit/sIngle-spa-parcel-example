# sIngle-spa-parcel-example
how to call a parcel-spa in another single-spa

in this example: app1 will call example-parcel. pretty much like it's a normal `react component`

## introduce
tech-stack: single-spa

this project includes below single-SPAs

- example-app1
- example-parcel1
- example-root-config
## Local Setup

1. in the root path, run:
```sh
yarn install # install deps for all single-spas
yarn start # start all single-spas
```

1. open `http://192.168.18.192:9000/` in the browswer, you should see the single-SPAs with parcel.

## Call Parcel-App
path: `example-app1/src/app.tsx`

we can use the Parcel-App just like a React component, and also we can pass props to the `Parcel-App`, see below code:


```tsx
import Parcel from 'single-spa-react/parcel';

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
```