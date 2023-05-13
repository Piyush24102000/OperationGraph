import Header from "./components/Header";
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";

const client = new ApolloClient({
  uri: 'https://operation-graph.vercel.app/graphql',
  cache: new InMemoryCache()
})
function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='*' element={<NotFound />} />
              <Route path='/project/:id' element={<Project />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>

  );
}

export default App;
