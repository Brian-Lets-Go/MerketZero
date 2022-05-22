import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient,  
  InMemoryCache, 
  ApolloProvider,
  createHttpLink 
} from '@apollo/client';

import './App.css';
import "./fonts/BancoRegular.woff";

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import SingleItem from './pages/SingleItem';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Routes>
            <Route
            path="/"
            element={<Home />}
            />
            <Route
            path="/login"
            element={<Login />}
            />
            <Route
            path="/signup"
            element={<Signup />}
            />
            <Route
            path="/profile"
            element={<Profile />}
            />
            <Route 
            path="/item/:id"
            element={<SingleItem />}
            />
            </Routes>
        </div>
        <Footer />
      </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
