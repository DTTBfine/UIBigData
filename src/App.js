import './App.css';
import Container from './component/Container';
import Header from './component/Header';

function App() {
  return (
    <div style={{
      padding: '10px 60px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'sans-serif',
      fontWeight: '100',
      color: '#333333',
      letterSpacing: '0.3px',
      wordSpacing: '1.5px'
    }}>
      <Header />
      <Container />
    </div>
  );
}

export default App;
