import React, { useState } from "react";
import '../../styles/styles.css'
import '../../styles/App.css'

export default function Home() {
    const [isPasswordCorrect, setPasswordCorrect] = useState(false);
    const [inputPassword, setInputPassword] = useState("");

    const handlePasswordChange = (e) => {
        setInputPassword(e.target.value);
    }

    const handlePasswordSubmit = () => {
        if (inputPassword === "Ciotka123") {
            setPasswordCorrect(true);
        } else {
            alert("Nieprawidłowe hasło. Spróbuj ponownie.");
        }
    }

    return (
        <div className="update_container">
            {!isPasswordCorrect ? (
                <div className="password-modal">
                    <h2>Wprowadź hasło:</h2>
                    <input
                        type="password"
                        value={inputPassword}
                        onChange={handlePasswordChange}
                    />
                    <button onClick={handlePasswordSubmit}>Zatwierdź</button>
                </div>
            ) : (
                <>
                    <p>v0.9</p>
                    <p></p>
                    <hr></hr>
                    <p>-</p>
                    <hr></hr>
                    <p>Aktualizacje funkcjonalności:</p>
                    <p> -Przyciski "rury białe" oraz "rury czarne" - działają</p>
                    <p>Uwagi:</p>
                    <p> Pojawiły się przyciski do filtrowania po wieku pracownika - póki co pozostaną niefunkcjonalne</p>
                </>
            )}
        </div>
    );
}
