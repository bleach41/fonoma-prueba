import Link from 'next/link'
import styles from './Navegation.module.css'

const links = [{
    label: 'CALCULADORA',
    route: '/'
}, {
    label: 'about',
    route: '/about'
}, {
    label: 'posts',
    route: '/posts'

}]

export function Navegation() {
    return (
        <header className={styles.header}>
            <nav >
                <ul className="flex flex-col items-center justify-between ">
                    {links.map(({ label, route }) => (
                        <li key={route}>
                            <Link href={route} >
                                {label}
                            </Link >
                        </li>
                    ))}
                </ul>
            </nav>
        </header>

    )
}
