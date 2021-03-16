async function addExercise(e) {
    setError(null);
    e.preventDefault();
    setLoading(true);
    loginBtnRef.current.disabled = true;

    if (!email || !password) {
        setError("Please fill in the details");
        setLoading(false);
        console.log("empty things")
        loginBtnRef.current.disabled = false;
    } else {
        let url = String(process.env.REACT_APP_BACKEND_URL) + "/login"
        console.log(url)
        let data = { email: email, password: password }
        console.log(data)
        let loginRequest = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include",
            mode: "cors",
            body: JSON.stringify(data)
        })
        let loginReqBody = await loginRequest.json();
        console.log(loginReqBody)
        if (!loginRequest.status || loginRequest.status != 200) {
            setError(loginReqBody.message);
            setLoading(false);
            loginBtnRef.current.disabled = false;
        } else if (loginRequest.status == 200) {
            setUser(loginReqBody)
            setUserState(true)
            history.push("/dashboard")
        }
    }
}