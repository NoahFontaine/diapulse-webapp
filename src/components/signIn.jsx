import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn({ onSignIn }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            onSignIn(user.email);
        } catch (error) {
            setError(
                error.code === 'auth/wrong-password' ? 'Invalid password' :
                    error.code === 'auth/user-not-found' ? 'User not found' :
                        'An error occurred during sign in'
            );
            console.error("Error signing in:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={{ padding: "2rem", maxWidth: "400px", margin: "0 auto" }}>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                    style={{ display: "block", width: "100%", marginBottom: "1rem" }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={isLoading}
                    style={{ display: "block", width: "100%", marginBottom: "1rem" }}
                />
                {error && (
                    <div style={{ color: "red", marginBottom: "1rem" }}>
                        {error}
                    </div>
                )}
                <button
                    type="submit"
                    disabled={isLoading}
                    style={{ opacity: isLoading ? 0.7 : 1 }}
                >
                    {isLoading ? "Signing In..." : "Sign In"}
                </button>
            </form>
        </div>
    );
}