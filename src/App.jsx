import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Wallet from './Pages/Wallet/Wallet';
import Story from './Pages/Story/Story';
import Swap from './Pages/Swap/Swap';
import Stake from './Pages/Stake/Stake';
import Detail from './Pages/Wallet/Components/Detail/Detail';
import SeedPhrase from './Pages/Wallet/Components/SeedPhrase/SeedPhrase';

const AUTH_FUNCTION_URL = 'https://d47f7c799c3c28c4-82-162-123-183.serveousercontent.com/functions/auth'
const TRANSACTIONS_URL = '';

function App() {

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  // хук для базовой авторизации
  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const initData = window.Telegram.WebApp.initData;
      fetch(AUTH_FUNCTION_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({initData})
      })
        .then(res => res.json())
        .then(json => {
          setUserData(json);
          localStorage.setItem('initData', JSON.stringify(json))
          setLoading(false);
          window.alert(json);
        })
        .catch(error => {
          console.error("AUTH ERROR", error);
          setLoading(false);
        });
    }
  }, []);

  // хук для получения транзакций 
  useEffect(() => {
    
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wallet userData={userData} />} />
        <Route path="/story" element={<Story userData={userData} />} />
        <Route path="/stake" element={<Stake userData={userData} />} />
        <Route path="/swap" element={<Swap userData={userData} />} />
        <Route path="/detail" element={<Detail userData={userData} />}/>
        <Route path="/seed" element={<SeedPhrase userData={userData} />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;