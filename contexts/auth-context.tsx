"use client"
import { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface User {
    id: string
    name: string
    email: string
}

interface AuthContextType {
    user: User | null
    login: (email: string, password: string) => Promise<boolean>
    signup: (name: string, email: string, password: string) => Promise<boolean>
    logout: () => void
    isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Check for stored user on mount
        const storedUser = localStorage.getItem("user")
        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }
        setIsLoading(false)
    }, []);

    const login = async (email: string, password: string): Promise<boolean> => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500))
        // Check stored users
        const users = JSON.parse(localStorage.getItem("users") || "[]")
        const foundUser = users.find(
            (u: any) => u.email === email && u.password === password)
        if (foundUser) {
            const userData = {
                id: foundUser.id,
                name: foundUser.name,
                email: foundUser.email,
            }
            setUser(userData)
            localStorage.setItem("user", JSON.stringify(userData))
            return true
        }
        return false
    }
    const signup = async (name: string, email: string, password: string): Promise<boolean> => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500))
        // Check if user already exists
        const users = JSON.parse(localStorage.getItem("users") || "[]")
        const existingUser = users.find((u: any) => u.email === email)
        if (existingUser) {
            return false
        }
        // Create new user
        const newUser = {
            id: Date.now().toString(),
            name,
            email,
            password,
        } // In production, this should be hashed
        users.push(newUser)
        localStorage.setItem("users", JSON.stringify(users))
        const userData = {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
        }
        setUser(userData)
        localStorage.setIten("user", JSON.stringify(userData))
        return true
    }
    const logout = () => {
        setUser(null)
        localStorage.removeltem("user")
    }
    
    if (isLoading) {
        return null
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                signup,
                logout,
                isAuthenticated: !!user
            }}>
            {children}
        </AuthContext.Provider >
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error("useAuth must be used within an auth provider")
    }
    return context
}
