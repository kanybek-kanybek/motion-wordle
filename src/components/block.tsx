import React, { useState, useRef } from "react";
import "./block.css";

interface BoardProps {
    tiles: string[];
    onTileChange: (index: number, value: string) => void;
}

const Block: React.FC<BoardProps> = ({ tiles, onTileChange }) => {
    const [inputValuesOne, setInputValuesOne] = useState<string[]>(
        Array(5).fill("")
    );
    const [inputValuesTwo, setInputValuesTwo] = useState<string[]>(
        Array(5).fill("")
    );
    const [inputValuesThree, setInputValuesThree] = useState<string[]>(
        Array(5).fill("")
    );
    const [inputValuesFour, setInputValuesFour] = useState<string[]>(
        Array(5).fill("")
    );
    const [inputValuesFive, setInputValuesFive] = useState<string[]>(
        Array(5).fill("")
    );

    const inputRefsOne = useRef<(HTMLInputElement | null)[]>(
        Array(5).fill(null)
    );
    const inputRefsTwo = useRef<(HTMLInputElement | null)[]>(
        Array(5).fill(null)
    );
    const inputRefsThree = useRef<(HTMLInputElement | null)[]>(
        Array(5).fill(null)
    );
    const inputRefsFour = useRef<(HTMLInputElement | null)[]>(
        Array(5).fill(null)
    );
    const inputRefsFive = useRef<(HTMLInputElement | null)[]>(
        Array(5).fill(null)
    );

    const handleSave = () => {
        const isValidInput = [
            inputValuesOne,
            inputValuesTwo,
            inputValuesThree,
            inputValuesFour,
            inputValuesFive,
        ].every((inputValues) => {
            return inputValues.every((value) => value && value.trim() !== "");
        });

        if (isValidInput) {
            alert(false);
        } else {
            alert(true);
        }
    };
    console.log(handleSave);

    const handleChange = (
        index: number,
        value: string,
        setInputValues: React.Dispatch<React.SetStateAction<string[]>>,
        inputRefs: React.RefObject<(HTMLInputElement | null)[]>
    ) => {
        setInputValues((prevValues) => {
            const newInputValues = [...prevValues];
            newInputValues[index] = value;

            let nextIndex = index;
            if (value.length === 1 && index < 4) {
                nextIndex = index + 1;
            } else if (value.length === 0 && index > 0) {
                nextIndex = index - 1;
            }

            if (nextIndex >= 0 && nextIndex < 5 && inputRefs.current) {
                inputRefs.current[nextIndex]?.focus();
            }

            return newInputValues;
        });
    };

    return (
        <div id="cube">
            <div className="container">
                {tiles.map((tile, idx) => (
                    <h1 key={idx}>{tile}</h1>
                ))}

                <div className="block">
                    <div className="block__content">
                        <div className="block__content__inputs">
                            {[
                                inputValuesOne,
                                inputValuesTwo,
                                inputValuesThree,
                                inputValuesFour,
                                inputValuesFive,
                            ].map((inputValues, idx) => (
                                <div key={`group-${idx}`}>
                                    {inputValues.map((value, index) => (
                                        <input
                                            key={`input-${idx}-${index}`}
                                            type="text"
                                            value={value}
                                            maxLength={1}
                                            ref={(el) => {
                                                if (idx === 0)
                                                    inputRefsOne.current[
                                                        index
                                                    ] = el;
                                                else if (idx === 1)
                                                    inputRefsTwo.current[
                                                        index
                                                    ] = el;
                                                else if (idx === 2)
                                                    inputRefsThree.current[
                                                        index
                                                    ] = el;
                                                else if (idx === 3)
                                                    inputRefsFour.current[
                                                        index
                                                    ] = el;
                                                else if (idx === 4)
                                                    inputRefsFive.current[
                                                        index
                                                    ] = el;
                                            }}
                                            onChange={(e) =>
                                                handleChange(
                                                    index,
                                                    e.target.value,
                                                    [
                                                        setInputValuesOne,
                                                        setInputValuesTwo,
                                                        setInputValuesThree,
                                                        setInputValuesFour,
                                                        setInputValuesFive,
                                                    ][idx],
                                                    [
                                                        inputRefsOne,
                                                        inputRefsTwo,
                                                        inputRefsThree,
                                                        inputRefsFour,
                                                        inputRefsFive,
                                                    ][idx]
                                                )
                                            }
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="wordle__text">
                        <p>Wordle #195</p>
                        <p>12/31/2021</p>
                    </div>
                </div>

                <button
                    style={{
                        padding: "18px 40px",
                        borderRadius: "15px",
                        marginLeft: "590px",
                        display: "flex",
                        marginTop: "20px",
                    }}
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default Block;
