'use client'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import { store } from '../stores/store'
import App from './App'

export default function Home() {
    return (
        <Provider store={store}>
            <main>
                <App />
            </main>
        </Provider>
    )
}
