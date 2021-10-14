/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useContext } from 'react';
import Renderer from 'react-test-renderer';
import { Observer } from 'mobx-react';
import StoreContext from '../src/components/StoreContext';
import StoreProvider from '../src/components/StoreProvider';

const Component = () => {
  const store = useContext(StoreContext);
  return <Observer>{() => (<p boards={store.boards} store={store}>hello</p>)}</Observer>;
};
const App = () => <div><Component /></div>;

test('The initial board should have 3 tabs', () => {
  const component = Renderer.create(
    <StoreProvider>
      <App />
    </StoreProvider>,
  );

  const tree = component.toJSON();
  expect(tree.children[0].props.boards.length).toEqual(3);
});

test('Add a new tab and check if the length is 4', () => {
  const component = Renderer.create(
    <StoreProvider>
      <App />
    </StoreProvider>,
  );

  const tree = component.toJSON();
  expect(tree.children[0].props.boards.length).toEqual(3);
  tree.children[0].props.store.addNewTab();
  expect(tree.children[0].props.boards.length).toEqual(4);
});

test('Quick pick should have board price greater than 0', () => {
  const component = Renderer.create(
    <StoreProvider>
      <App />
    </StoreProvider>,
  );

  const tree = component.toJSON();
  tree.children[0].props.store.quickPick(0);
  expect(Number(tree.children[0].props.store.getBoardPrice())).toBeGreaterThan(0);
});

test('Quick pick should have total price greater than 0', () => {
  const component = Renderer.create(
    <StoreProvider>
      <App />
    </StoreProvider>,
  );

  const tree = component.toJSON();
  tree.children[0].props.store.quickPick(0);
  expect(Number(tree.children[0].props.store.getTotalPrice())).toBeGreaterThan(0);
});
