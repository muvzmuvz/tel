import React, {useState, useRef} from "react";

export const CodeInput = ({length = 4, onComplete}: {
    length?: number, onComplete:
        (code: string) => void
}) => {
    const [values, setValues] = useState(Array(length).fill(""));
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (index: number, value: string) => {
        if (!/^[0-9]?$/.test(value)) return;
        const newValues: string[] = [...values];
        newValues[index] = value;
        setValues(newValues);

        if (value && index < length - 1) {
            inputsRef.current[index + 1]?.focus();
        }

        if (newValues.every((val) => val !== "")) {
            onComplete(newValues.join(""));
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === "Backspace" && !values[index] && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    return (
        <div className="flex justify-center gap-3">
            {values.map((val, i) => (
                <input
                    key={i}
                    ref={(el) => {
                        inputsRef.current[i] = el
                    }}
                    type="text"
                    maxLength={1}
                    value={val}
                    onChange={(e) => handleChange(i, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(i, e)}
                    className="w-14 h-16 text-center border-full border-2 border-gray-400 text-xl focus:border-blue-500 outline-none rounded-xl"
                />
            ))}
        </div>
    );
};
