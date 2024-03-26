import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

function HomePage() {
  return <p>This is Homepage</p>;
}

function AboutPage() {
  return <p>This is About page</p>;
}

function FAQPage() {
  return <p>This is FAQ page</p>;
}

// tidak seperti latihan sebelumnya menggunakan class component
// karena tidak lagi menyimpan state
export default function ReactRouterRoutingApp() {
  return (
    <BrowserRouter>
      <header>
        <ul>
          <li>
            {/* props to itu seperti href */}
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/faq'>FAQ</Link>
          </li>
        </ul>
      </header>

      <main>
        {/* <p>Hello, World!</p> */}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/faq' element={<FAQPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}