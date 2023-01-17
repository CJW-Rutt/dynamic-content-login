import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import styles from '../styles/Counter.module.css'

export default function Counter() {
    const [number, setNumber] = useState(0);
    const searchParams = useSearchParams();
    const isUser = searchParams.get('username')
    const router = useRouter();

    useEffect(() => {
        !isUser ? router.push('/') : <></>
    }, [isUser])

    return(
        <> 
        <main className={styles.main}>
            <div className={styles.main_container}>
                <div className={styles.page_title}>Try Increasing The Number</div>
                <div className={styles.sub_title}>Welcome {isUser}, have fun with numbers!</div>
                <div className={styles.counter_number}>{number}</div>
                <div className={styles.button_container}>
                    <button className={styles.counter_decrease} onClick={() => setNumber( number - 1 )}>Decrement</button>
                    <button className={styles.counter_increase} onClick={() => setNumber( number + 1 )}>Increment</button>  
                </div>
            </div>
        </main>
        </>
    )
}