import './SeedPhrase.css';
import { useState } from 'react';
import { FiCopy } from "react-icons/fi";
import { FaEye, FaRegEyeSlash, FaCheck } from "react-icons/fa";
import Header from '../../../../views/Header/Header';

const SeedPhrase = () => {
    const [loginVisible, setLoginVisible] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [seedCopied, setSeedCopied] = useState(false);
    const [loginCopied, setLoginCopied] = useState(false);
    const [passwordCopied, setPasswordCopied] = useState(false);

    const loginValue = "login";
    const passwordValue = "Password";

    const toggleLoginVisibility = () => {
        setLoginVisible(prev => !prev);
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(prev => !prev);
    };

    const handleCopyLogin = () => {
        navigator.clipboard.writeText(loginValue);
        setLoginCopied(true);
        setTimeout(() => setLoginCopied(false), 2000);
        console.log("login copy: ", loginValue);
    };

    const handleCopyPassword = () => {
        navigator.clipboard.writeText(passwordValue);
        setPasswordCopied(true);
        setTimeout(() => setPasswordCopied(false), 2000);
        console.log("password copy: ", passwordValue);
    };

    const blocksInfo = [
        { name: "LOGIN", value: loginValue, visible: loginVisible, toggleVisibility: toggleLoginVisibility, handleCopy: handleCopyLogin, copied: loginCopied },
        { name: "PASSWORD", value: passwordValue, visible: passwordVisible, toggleVisibility: togglePasswordVisibility, handleCopy: handleCopyPassword, copied: passwordCopied },
    ];

    const seedWords = [
        "apple", "banana", "cherry", "dog", "elephant", "flower",
        "garden", "house", "ice", "jungle", "kite", "lemon"
    ];

    const handleCopySeed = () => {
        const seedText = seedWords.join(' ');
        navigator.clipboard.writeText(seedText);
        setSeedCopied(true);
        setTimeout(() => setSeedCopied(false), 2000);
        console.log("seed copied:", seedText);
    };

    return (
        <div className='seed-page'>
            <Header />

            <div className='backup-text'>
                <div className='main-text'>Backup Your Account</div>
                <div className='sub-text'>Save your credentials securely</div>
            </div>

            <div className='login-and-password-section'>
                {blocksInfo.map((block, index) => (
                    <div className='login-and-password-block' key={index}>
                        <div className='block-hight-section'>
                            <div className='block-name'>{block.name}</div>
                            <div className='copy-and-see-buttons'>
                                <button
                                    className='first-button'
                                    onClick={block.toggleVisibility}
                                >
                                    {block.visible ? <FaRegEyeSlash /> : <FaEye />}
                                </button>
                                <button
                                    className='second-button'
                                    onClick={block.handleCopy}
                                >
                                    {block.copied ? <FaCheck /> : <FiCopy />}
                                </button>
                            </div>
                        </div>
                        <div className='block-bottom-section'>
                            <div>
                                {block.visible ? block.value : '●●●●●●●●'}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='seed-section'>
                <div className='seed-text'>SEED PHRASE (12 WORDS)</div>
                <div className='seed-words-section'>
                    {seedWords.map((word, index) => (
                        <div className='seed-word-item' key={index}>
                            <span className='seed-word-number'>{index + 1}</span>
                            <span className='seed-word-text'>{word}</span>
                        </div>
                    ))}
                </div>
                <p className="receive-info">
                    Write down these 12 words in order and store them securely. Never share your seed phrase!
                </p>
                <div className="warning-banner">
                    ⚠️ The seed phrase, login and password is the only way to recover your account. Store it in a safe place!
                </div>
                <div className='copy-seed-button-section'>
                    <button className='copy-seed-button' onClick={handleCopySeed}>
                        {seedCopied ? "Copied!" : "Copy Seed Phrase"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SeedPhrase;