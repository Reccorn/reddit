import React, { useEffect, useState } from 'react';
import './main.global.css';
import { hot } from 'react-hot-loader/root';
import Layout from './shared/Layout/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList/CardsList';
import { rootReducer } from './store/reducer';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { saveTokenAsync } from './store/token/actions';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { store as easyStore } from './easyStore';
import { StoreProvider } from 'easy-peasy';
import { NotFound } from './shared/NotFound';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const AppComponent = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    store.dispatch(saveTokenAsync() as any);
  }, []);

  return (
    <Provider store={store}>
      <StoreProvider store={easyStore}>
        {mounted && (
          <BrowserRouter>
            <Layout>
              <Header />
              <Content>
                <Routes>
                  <Route
                    path="/"
                    element={<Navigate to="/posts" replace />}
                  />
                  <Route
                    path="/auth"
                    element={<Navigate to="/posts" replace />}
                  />
                  <Route path={"/posts/*"} element={<CardsList />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Content>
            </Layout>
          </BrowserRouter>
        )}
      </StoreProvider>
    </Provider>
  );
};

export const App = hot(() => <AppComponent />);
