export default function Settings({userName, setUserName, saveUserName, setSaveUserName}) {
    function handleSubmit(event) {
        event.preventDefault()
        setSaveUserName(userName)
    }
    return(
        <>
            <form action="#" onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setUserName(e.target.value)} value={userName} />
                <button type='submit'>Save</button>
            </form>
        </>
    )
}