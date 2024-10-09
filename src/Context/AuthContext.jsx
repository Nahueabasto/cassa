import { createContext, useState, useContext } from "react";
import { registerEmail } from "../api/postEmail"; // Importa la función de enviar correo

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

export const AuthProvider = ({ children }) => {
    const [errors, setErrors] = useState([]);

    // Función para manejar el registro de correo electrónico
    const sendRegistrationEmail = async (emailData) => {
        try {
            const res = await registerEmail(emailData);
            console.log('Registration email sent:', res.data); // Maneja la respuesta según sea necesario
        } catch (error) {
            console.error('Error sending registration email:', error.response.data);
            setErrors(error.response.data); // Guarda el error si es necesario
        }
    };

    return (
        <AuthContext.Provider value={{
            sendRegistrationEmail, // Solo exponer la función de registro de correo
            errors, // También expone los errores si es necesario
        }}>
            {children}
        </AuthContext.Provider>
    );
};
