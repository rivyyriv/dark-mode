import { useState } from 'react'

function useLocalStorage(key, initialValue) {

	// setting state and grabbing data form local storage
	const [storedValue, setStoredValue] = useState(() => {

		// Grab data from local storage, and evaluate if it exist or not
		const data = window.localStorage.getItem(key);
		return data ? JSON.parse(data) : initialValue;

	})

	// Setter function that we return from our hook to be used.
	const setValue = value => {
		// Setting local state to the value passed to setValue
		setStoredValue(value);

		// storing the value in local storage
		window.localStorage.setItem(key, JSON.stringify(value));
	}

	return [storedValue, setValue];
}

export default useLocalStorage; 