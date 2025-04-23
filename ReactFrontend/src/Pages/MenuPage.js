import {MenuButton} from "../Buttons/Buttons.js";
import "./MenuPage.css";

export default function MenuPage() {
    return (
        <>
            <div className="centerFrame">
                <MenuButton idleText="Add New Password Entry" />
            </div>
        </>
    );
}