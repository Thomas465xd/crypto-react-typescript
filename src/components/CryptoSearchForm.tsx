import { currencies } from "../data"

export default function CryptoSearchForm() {
    return (
        <form action="" className="form">
            <div className="field">
                <label htmlFor="currency">Coin:</label>
                <select 
                    name="currency" 
                    id="currency"
                >
                    <option value="">-- Select --</option>
                    {currencies.map(currency => (
                        <option key={currency.code} value={currency.code}>
                            {currency.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="field">
                <label htmlFor="cryptocurrency">Cryptocurrency:</label>
                <select 
                    name="cryptocurrency" 
                    id="cryptocurrency"
                >
                    <option value="">-- Select --</option>
                </select>
            </div>

            <input type="submit" value="Quote"/>
        </form>
    )
}
