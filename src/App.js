import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [resultMessage, setResultMessage] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  // WebSocket bağlantısı
  useEffect(() => {
    const socket = new WebSocket('ws://localhost:3001'); // WebSocket sunucu adresini kontrol et

    socket.onopen = function() {
      console.log('WebSocket bağlantısı başarılı.');
    };

    socket.onmessage = function(event) {
      console.log('Sunucudan gelen mesaj:', event.data);
    };

    socket.onerror = function(error) {
      console.error('WebSocket hatası:', error);
    };

    socket.onclose = function() {
      console.log('WebSocket bağlantısı kapandı.');
    };

    return () => {
      socket.close();
    };
  }, []);

  // Zamanı almak için kullanılan API isteği
  useEffect(() => {
    fetchTime();
    const interval = setInterval(fetchTime, 60000); // Zamanı her 1 dakikada bir güncelle
    return () => clearInterval(interval);
  }, []);

  const fetchTime = () => {
    fetch('http://worldtimeapi.org/api/timezone/Europe/Istanbul')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.json();
      })
      .then(data => {
        const datetime = new Date(data.datetime);
        const timeString = datetime.toLocaleTimeString();
        const dateString = datetime.toLocaleDateString();
        setTime(timeString);
        setDate(dateString);
      })
      .catch(error => {
        console.error("API'den zaman bilgisi alınırken hata oluştu:", error);
        setTime('Saat bilgisi alınamadı.');
        setDate('Tarih bilgisi alınamadı.');
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { email, message };

    fetch('http://localhost:3001/send-email', {  // Sunucu portu düzeltildi
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setResultMessage('Mesaj başarıyla gönderildi!');
      })
      .catch(error => {
        console.error('Error:', error);
        setResultMessage('Mesaj gönderimi sırasında bir hata oluştu.');
      });
  };

  return (
    <div className="app">
      <Sidebar time={time} date={date} />
      <div className="content">
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection
          email={email}
          setEmail={setEmail}
          message={message}
          setMessage={setMessage}
          handleSubmit={handleSubmit}
          resultMessage={resultMessage}
        />
        <BlogSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
