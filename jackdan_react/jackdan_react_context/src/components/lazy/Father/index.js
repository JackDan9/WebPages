import React, { lazy, Suspense, Component } from 'react';

// import Child from '../Child';
import Loading from '../../Loading';

const Child = lazy(() => import('../Child'));

export default class lazyFather extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Suspense fallback={<Loading />}>
          <Child />
        </Suspense>
      </div>
    )
  }
}