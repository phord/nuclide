'use babel';
/* @flow */

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

/* global HTMLElement */

import {React, ReactDOM} from 'react-for-atom';

/**
 * A custom HTMLElement we render React elements into.
 */
class ReactMountRootElement extends HTMLElement {
  _reactElement: ?React.Element<any>;

  setReactElement(reactElement: React.Element<any>): void {
    this._reactElement = reactElement;
  }

  attachedCallback(): mixed {
    if (this._reactElement == null) { return; }
    ReactDOM.render(this._reactElement, this);
  }

  detachedCallback(): mixed {
    if (this._reactElement == null) { return; }
    ReactDOM.unmountComponentAtNode(this);
  }

}

export default document.registerElement('nuclide-react-mount-root', {
  prototype: ReactMountRootElement.prototype,
});
