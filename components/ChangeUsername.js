import { useMoralis } from "react-moralis"

function ChangeUsername() {
    const { setUserData, isUserUpdating, userError, user, isInitializing } = useMoralis();

    const setUsername = () => {
        const username = prompt(
            `Enter your new username. (current: ${user.getUsername()})`
        );

        if (!username) return;

        setUserData({
            username, //username:username,
        });
    };

    return (
        <div className="text-sm absolute right-5 top-5">
            <button 
            disabled={isUserUpdating}
            onClick={() => !isInitializing && setUsername()}
            className="hover:text-pink-700"
            >
                Change your username
            </button>            
        </div>
    )
}

export default ChangeUsername
