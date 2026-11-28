
export default function Home() {
    const str = "This is Home Component..."
    var a = 10;
    var b = 20;
    if (a == b) {
        console.log("a is same as b")
    }
    const apiUrl = import.meta.env.VITE_API_URL;
    const environment = import.meta.env.VITE_APP_ENV;
    return <>
        <h3>This is Home Component</h3>
        <div>{environment} ----- {apiUrl}</div>
    </>
}
