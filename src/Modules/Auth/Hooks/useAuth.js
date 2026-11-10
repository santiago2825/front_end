import { useState } from 'react'
import { authService } from '../Services/authService'

export default function useAuth() {
    const [session, setSession] = useState(() => authService.getSession())

    const logout = () => {
        authService.logout()
        setSession(null)
    }

    return { session, logout }
}
