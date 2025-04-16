import Button from "../Buttons/Buttons.js";

export default function MainPage() {
    return (
    <>
        <h1 className="text-center">Hello bootybutthead!</h1>
        <p className='text-center'>There is a lot going on here so far. Just text really.</p>
        <ul>
            <li>Test1</li>
            <li>Test2</li>
        </ul>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', flexDirection: 'column', gap: '25px'}}>
            <Button
                idleText="Press me to be cool!"
            />
            <Button
                idleText="Second Page!"
            />
            <Button
                idleText="Third Option!"
            />
        </div>
    </>
    );
}