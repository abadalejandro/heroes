


export const LoginScreen =  ({history}:any) => {
    const handleClick = (_e:React.FormEvent<EventTarget>) => {
    //    history.push('/'); 
       history.replace('/');
    }

    return (
        <div className="container mt-5">
            <h1>Loginscreen</h1>
            <hr />
            <button className="btn btn-primary" onClick={handleClick}>Login</button>
        </div>
    )
}
