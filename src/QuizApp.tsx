import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import QuizSolve from './components/QuizSolve';
import ManageQuiz from './components/ManageQuiz';
import CreateQuiz from './components/CreateQuiz';

function QuizApp() {
    return <BrowserRouter>
        <div>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">홈 화면</Link></li>
                        <li><Link to="/quiz">퀴즈 풀기</Link></li>
                        <li><Link to="/manage">퀴즈 관리</Link></li>
                    </ul>
                </nav>
            </header>
            <div>
                <Routes>
                    <Route path="/" element={<div>홈 화면입니다.</div>} />
                    <Route path="/quiz" element={<QuizSolve/>} />
                    <Route path="/manage" element={<ManageQuiz/>} />
                    <Route path="/create" element={<CreateQuiz/>} />
                </Routes>
            </div>
        </div>
    </BrowserRouter>
}

export default QuizApp;
