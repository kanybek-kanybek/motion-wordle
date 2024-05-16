import React, { useState, useRef } from "react";
import "../components/block.css";
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
    const [invalidInputs, setInvalidInputs] = useState<{
        [key: string]: boolean;
    }>({});

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
        const allInputs = [
            inputValuesOne,
            inputValuesTwo,
            inputValuesThree,
            inputValuesFour,
            inputValuesFive,
        ];

        const newInvalidInputs: { [key: string]: boolean } = {};

        allInputs.forEach((inputValues, rowIndex) => {
            inputValues.forEach((value, colIndex) => {
                if (!value || value.trim() === "") {
                    newInvalidInputs[`${rowIndex}-${colIndex}`] = true;
                }
            });
        });

        setInvalidInputs(newInvalidInputs);

        const isValidInput = Object.keys(newInvalidInputs).length === 0;

        if (isValidInput) {
            alert("Inputs are valid!");
        } else {
            alert(true);
        }
    };

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

        const key = `${inputRefs.current?.indexOf(
            inputRefs.current[index]
        )}-${index}`;
        setInvalidInputs((prev) => {
            const newInvalidInputs = { ...prev };
            delete newInvalidInputs[key];
            return newInvalidInputs;
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
                            ].map((inputValues, rowIndex) => (
                                <div key={`group-${rowIndex}`}>
                                    {inputValues.map((value, colIndex) => {
                                        const key = `${rowIndex}-${colIndex}`;
                                        return (
                                            <input
                                                key={`input-${rowIndex}-${colIndex}`}
                                                type="text"
                                                value={value}
                                                maxLength={1}
                                                style={{
                                                    backgroundColor:
                                                        invalidInputs[key]
                                                            ? "white"
                                                            : "green",
                                                }}
                                                ref={(el) => {
                                                    if (rowIndex === 0)
                                                        inputRefsOne.current[
                                                            colIndex
                                                        ] = el;
                                                    else if (rowIndex === 1)
                                                        inputRefsTwo.current[
                                                            colIndex
                                                        ] = el;
                                                    else if (rowIndex === 2)
                                                        inputRefsThree.current[
                                                            colIndex
                                                        ] = el;
                                                    else if (rowIndex === 3)
                                                        inputRefsFour.current[
                                                            colIndex
                                                        ] = el;
                                                    else if (rowIndex === 4)
                                                        inputRefsFive.current[
                                                            colIndex
                                                        ] = el;
                                                }}
                                                onChange={(e) =>
                                                    handleChange(
                                                        colIndex,
                                                        e.target.value,
                                                        [
                                                            setInputValuesOne,
                                                            setInputValuesTwo,
                                                            setInputValuesThree,
                                                            setInputValuesFour,
                                                            setInputValuesFive,
                                                        ][rowIndex],
                                                        [
                                                            inputRefsOne,
                                                            inputRefsTwo,
                                                            inputRefsThree,
                                                            inputRefsFour,
                                                            inputRefsFive,
                                                        ][rowIndex]
                                                    )
                                                }
                                            />
                                        );
                                    })}
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
