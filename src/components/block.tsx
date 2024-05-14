import React, { useState } from "react";
import "./block.css";

interface BoardProps {
    tiles: string[];
    onTileChange: (index: number, value: string) => void;
}

const Block: React.FC<BoardProps> = ({ tiles, onTileChange }) => {
    const firstFiveTiles = tiles.slice(0, 25);
    const [work, setWork] = useState("");

    function handleSave() {
        if (firstFiveTiles.includes(work)) {
            alert("TRUE");
        } else {
            alert("FOALSE");
        }
    }
    console.log(firstFiveTiles);

    return (
        <div id="cube">
            <div className="container">
                <input
                    style={{
                        width: "400px",
                        height: "50px",
                        marginLeft: "50px",
                        borderRadius: "8px",
                        justifyContent: "center",
                        paddingLeft: "10px",
                    }}
                    type="text"
                    value={work}
                    onChange={(e) => setWork(e.target.value)}
                />
                <button
                    style={{
                        padding: "18px 40px",
                        borderRadius: "15px",
                        marginLeft: "20px",
                    }}
                    onClick={handleSave}
                >
                    Save
                </button>
                <div className="block">
                    <div className="block__content">
                        <div className="block__content__inputs">
                            {firstFiveTiles.map((letter, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    value={letter}
                                    maxLength={1}
                                    onChange={(e) =>
                                        onTileChange(index, e.target.value)
                                    }
                                />
                            ))}
                        </div>
                    </div>
                    <div className="wordle__text">
                        <p>Wordle #195</p>
                        <p>12/31/2021</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Block;
