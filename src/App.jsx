import { useState } from 'react'
import Header from "./components/Header.jsx";
import ProfileCard from "./components/ProfileCard.jsx";
import Footer from "./components/Footer.jsx";
import './App.css'


function App() {
  return (
    <div className="app">

      <Header />

      <main className="profile-grid">

        <ProfileCard
          name="Maya Cohen"
          description="My best friend. She loves music and traveling."
          avatar="https://i.pravatar.cc/150?img=47"
          type="friend"
        />

        <ProfileCard
          name="David Levi"
          description="My teacher. He teaches computer science."
          avatar="https://i.pravatar.cc/150?img=12"
          type="teacher"
        />

        <ProfileCard
          name="Noa Israel"
          description="A computer science student."
          avatar="https://i.pravatar.cc/150?img=44"
          type="student"
        />

      </main>

      <Footer />

    </div>
  );
}

export default App;
