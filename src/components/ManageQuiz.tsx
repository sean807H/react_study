import axios from "axios"
import { useEffect, useState } from "react"

type Quiz = {
    id: string;
    question: string;
    choices: string[];
    answer: number;
}

const fetchQuizzes = async () => {
    try {
        const response = await axios.get<Quiz[]>("/api/quizzes");
        return response.data;
    } catch (error) {
        console.error('퀴즈 데이터를 가져오는 중 오류 발생:', error);
        throw error;
    }
}

const deleteQuiz = async (id: string) => {
    try {
        axios.delete(`/api/quizzes/${id}`);
    } catch (error) {
        console.error('퀴즈 삭제 중 오류 발생:', error);
        throw error;
    }
}

export default function ManageQuiz() {
    const [quizzes, setQuizzes] = useState<Quiz[] | null>(null);

    useEffect(() => {
        (async () => {
            // const quizzes: Quiz[] = await fetchQuizzes()
            const quizzes = await fetchQuizzes();
            setQuizzes(quizzes);
        })()
    }, []);
    return <div>
        <h1>퀴즈 관리</h1>
        <button>새 퀴즈 생성</button>
        {
            quizzes?.map(q => <div key={q.id}>
                <h3>{q.question}</h3>
                {
                    q.choices.map((c, idx) => {
                        return <span style={idx === q.answer ? { color: "red" } : {}}>{idx + 1}. {c}&nbsp;</span>
                    })
                }
            </div>)
        }
    </div>
}