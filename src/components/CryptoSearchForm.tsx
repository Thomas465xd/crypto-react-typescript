export default function CryptoSearchForm() {
    return (
        <form action="">
            <div className="field">
                <label htmlFor="currency">Coin:</label>
                <select 
                    name="currency" 
                    id="currency"
                >
                    <option value="">-- Select --</option>
                </select>
            </div>
        </form>
    )
}
