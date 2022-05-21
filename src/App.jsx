import { CharactersList } from './container/CharactersList';
import { Layout } from './container/Layout';

function App() {

  return (
    <div className="App">
      <Layout >
        <CharactersList />
      </Layout>
    </div>
  );
}

export { App };
