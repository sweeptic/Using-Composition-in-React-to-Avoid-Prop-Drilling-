import React from 'react';
import './App.css';

let MyContext = React.createContext();

function App() {
  let [currentUser, setCurrentUser] = React.useState(null);

  return (
    <MyContext.Provider value={{ currentUser }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <div style={{ backgroundColor: 'lightgray' }}>
          <Header />
        </div>
        <div style={{ flex: 1 }}>
          {currentUser ? (
            <Dashboard />
          ) : (
            <LoginScreen onLogin={() => setCurrentUser({ name: 'Michael' })} />
          )}
        </div>
        <div style={{ backgroundColor: 'lightgray' }}>
          <Footer />
        </div>
      </div>
    </MyContext.Provider>
  );
}

function Header() {
  return (
    <div>
      <h1>Header</h1>
    </div>
  );
}

function LoginScreen({ onLogin }) {
  return (
    <div>
      <h3>Please Login</h3>
      <button onClick={onLogin}>Login</button>
      <br />
      <br />
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>The Dashboard</h2>
      <DashboardNav />
      <DashboardContent />
    </div>
  );
}

function DashboardContent() {
  return (
    <div>
      <h3>Dashboard Content</h3>
      <WelcomeMessage />
    </div>
  );
}

function WelcomeMessage() {
  let { currentUser } = React.useContext(MyContext);
  return (
    <div>
      <p>Welcome {currentUser.name}</p>
    </div>
  );
}

function DashboardNav() {
  return (
    <div>
      <h3>Dashboard Nav</h3>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <h1>Footer</h1>
    </div>
  );
}

export default App;
