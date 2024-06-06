export interface IAuthContextProps {
    isAuthenticated: boolean;
    loginUser: () => void;
    logoutUser: () => void;
}