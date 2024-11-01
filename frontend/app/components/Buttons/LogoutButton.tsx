'use client';

import { useRouter } from "next/navigation";
import { resetAuthCookies } from "@/app/lib/actions";

const LogoutButton: React.FC = () => {
    const router = useRouter();

    const submitLogout = async () => {
        await resetAuthCookies();
        router.push('/');
    };

    return (
        <button onClick={submitLogout} className="logout-button">
            Log out
        </button>
    );
}

export default LogoutButton;
