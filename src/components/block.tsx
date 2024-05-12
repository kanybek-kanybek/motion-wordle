import "../components/block.css";

const API_URL = "https://piccolo-server.vercel.app/words";

fetch(API_URL)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        const outputElement = document.createElement("h1");
        outputElement.textContent = JSON.stringify(data);

        document.body.appendChild(outputElement);
    })
    .catch((error) => {
        console.error(error.find(() => error.data));
    });

function Block() {
    return (
        <>
            <div className="wrap">
                <div className="container">
                    <div className="block">
                        <div className="block__content">
                            <div className="block__content__inputs">
                                <input type="text" name="" id="" />
                                <input type="text" name="" id="" />
                                <input type="text" name="" id="" />
                                <input type="text" name="" id="" />
                                <input type="text" name="" id="" />
                            </div>
                            <div className="block__content__inputs">
                                <input type="text" name="" id="" />
                                <input type="text" name="" id="" />
                                <input type="text" name="" id="" />
                                <input type="text" name="" id="" />
                                <input type="text" name="" id="" />
                            </div>
                            <div className="block__content__inputs">
                                <input type="text" name="" id="" />
                                <input type="text" name="" id="" />
                                <input type="text" name="" id="" />
                                <input type="text" name="" id="" />
                                <input type="text" name="" id="" />
                            </div>
                            <div className="block__content__inputs">
                                <input type="text" name="" id="" />
                                <input type="text" name="" id="" />
                                <input type="text" name="" id="" />
                                <input type="text" name="" id="" />
                                <input type="text" name="" id="" />
                            </div>
                            <div className="block__content__inputs">
                                <input type="text" name="" id="" />
                                <input type="text" name="" id="" />
                                <input type="text" name="" id="" />
                                <input type="text" name="" id="" />
                                <input type="text" name="" id="" />
                            </div>
                        </div>
                        <div className="block__title">
                            <p>Wordle #195</p>
                            <p>12/31/2021</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Block;
