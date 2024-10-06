import CryptoSearchForm from "./components/CryptoSearchForm"

function App() {
    return (
        <>
            <div className="container">
                <h1 className="app-title">
                    Cryptocurrency <span>Quoter</span>
                </h1>

                <div className="content">
                    <CryptoSearchForm/>
                </div>
            </div>
        </>
    )
}

export default App
