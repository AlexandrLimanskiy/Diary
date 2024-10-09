import { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styles from '/src/App.module.scss';
import Main from './components/jsxComponents/Main/Main';
import ToDoList from './components/jsxComponents/TodoList/ToDoList';
import Diary from './components/jsxComponents/Diary/Diary';
import Settings from './components/jsxComponents/Settings/Settings';
import Contact from './components/jsxComponents/Contact/Contact';

function App() {
  const [userName, setUserName] = useState('');
  const [saveUserName, setSaveUserName] = useState('userName');

  return (
    <>
      <Router>
        <header className='header'>
          <div className="container">
            <div className={styles.navMenu}>
              <div className="navMenuContainer">
                <div className={styles.navMenuButtons}>
                  <div className="userView">
                    <p>{saveUserName}</p>
                  </div>
                  <div className="main">
                    <p><Link to='/'>Главная</Link></p>
                  </div>
                  <div className="todoListButton">
                    <p><Link to='/TodoList'>Приложение ведения списка дел</Link></p>
                  </div>
                  <div className="diaryButton">
                    <p><Link to='/Diary'>Приложение ведения дневника</Link></p>
                  </div>
                  <div className="settings">
                    <p><Link to='/Settings'>Настройки</Link></p>
                  </div>
                  <div className={styles.contact}>
                    <p><Link to='/Contact'>Связаться</Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/TodoList' element={<ToDoList />} />
          <Route path='/Diary' element={<Diary />} />
          <Route path='/Settings' element={<Settings userName={userName} setUserName={setUserName} saveUserName={saveUserName} setSaveUserName={setSaveUserName} />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
