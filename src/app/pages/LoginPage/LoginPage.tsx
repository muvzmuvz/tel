import React, {useState} from "react";
import {SendHorizontal} from "lucide-react";
import {type NavigateFunction, useNavigate} from "react-router-dom";
import {CodeInput} from "../../shared/ui/CodeInput";

export const LoginPage = () => {
    const [tel, setTel] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [code, setCode] = useState("");
    const navigate: NavigateFunction = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Авторизация: ${tel}`);
        setSubmitting(true);
    };
    const handleVerifyCode = (e: React.FormEvent) => {
        e.preventDefault();
        if (code.length < 4) {
            return alert('Введите код полностью')
        }
        alert(code)
        setSubmitting(false);
        setCode('')
        setTel('')
        navigate('/')
    }


    if (submitting) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-white">
                <form
                    onSubmit={handleVerifyCode}
                    className="w-96 flex flex-col gap-6"
                >
                    <div className="flex justify-center">
                        <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center">
                            <SendHorizontal color={"white"} size={35}/>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-center text-gray-800">
                        Вход в Мессенджер
                    </h2>
                    <p className="text-center text-gray-500 text-sm">
                        Пожалуйста, введите код подтверждения
                    </p>
                    <CodeInput
                        length={4}
                        onComplete={(code) => setCode(code)}
                    />
                    <button
                        type="submit"
                        className=" cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition-colors text-lg"
                    >
                        Войти
                    </button>
                </form>
            </div>
        )
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <form
                onSubmit={handleSubmit}
                className="w-96 flex flex-col gap-6"
            >
                <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center">
                        <SendHorizontal color={"white"} size={35}/>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-center text-gray-800">
                    Вход в Мессенджер
                </h2>
                <p className="text-center text-gray-500 text-sm">
                    Пожалуйста, введите свой номер телефона
                </p>
                <input
                    type="tel"
                    placeholder="+7 912 123 45 67"
                    maxLength={12}
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                    required
                    className="border-b border-gray-400 px-2 py-3 focus:outline-none focus:border-blue-500 text-lg"
                />
                <button
                    type="submit"
                    className=" cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition-colors text-lg"
                >
                    Далее
                </button>

            </form>
        </div>
    );
};
