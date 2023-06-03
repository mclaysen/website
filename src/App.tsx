import './App.css';
import Resume from './components/Resume';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Resume></Resume>
        
      </div>
    </QueryClientProvider>
  );
}
export default App;
