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
                    <p>Witaj w bazie danych</p>
                </>
            )}
        </div>
    );
}
