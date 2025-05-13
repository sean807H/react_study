import axios from "axios"
import { useEffect, useState } from "react"

// 중복되지만, 일단 OK
type Quiz = {
    id: string;
    question: string;
    choices: string[];
    answer: number;
}

// 퀴즈 상태를 위한 열거형
enum QuizStatus {
    LOADING, // 데이터 로딩 중
    IN_PROGRESS, // 퀴즈 진행 중
    COMPLETED, // 퀴즈 완료
}

const fetchQuizzes = async () => {
    try {
        const response = await axios.get<Quiz[]>(`api/quizzes`)
        return response.data
    } catch (error) {
        console.error('퀴즈 데이터를 가져오는 중 오류 발생:', error)
        throw error
    }
}

export default function QuizSolve(){
    return <div>Quiz Solve</div>
}