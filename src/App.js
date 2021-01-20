import React from 'react';
import './App.css';

function App() {
  let [currentUser, setCurrentUser] = React.useState('');

  return (
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
          <Dashboard>
            <DashboardNav />
            <DashboardContent>
              <WelcomeMessage user={currentUser} />
            </DashboardContent>
          </Dashboard>
        ) : (
          <LoginScreen onLogin={() => setCurrentUser({ name: 'Michael' })} />
        )}
      </div>
      <div style={{ backgroundColor: 'lightgray' }}>
        <Footer />
      </div>
    </div>
  );
}

function Dashboard({ children }) {
  return (
    <div>
      <h2>The Dashboard</h2>
      {children}
    </div>
  );
}

function DashboardContent({ children }) {
  return (
    <div>
      <h3>Dashboard Content</h3>
      {children}
    </div>
  );
}

// function DashboardContent({ user }) {
//   return (
//     <div>
//       <h3>Dashboard Content</h3>
//       <WelcomeMessage user={user} />
//     </div>
//   );
// }

function DashboardNav() {
  return (
    <div>
      <h3>Dashboard Nav</h3>
    </div>
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

function WelcomeMessage({ user }) {
  return (
    <div>
      <p>Welcome {user.name}</p>
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
