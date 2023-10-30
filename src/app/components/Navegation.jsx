import Link from 'next/link'
import styles from './Navegation.module.css'

const links = [{
    label: 'CALCULADORA',
    route: '/'
}, {
    label: 'ABOUT',
    route: '/about'
}, {
    label: 'posts',
    route: '/posts'

}]

export function Navegation() {
    return (
        <header className={styles.header}>
            <nav >
                <ul className="flex flex-wrap items-center justify-around py-2 shadow shadow-lg">
                    {links.map(({ label, route }) => (
                        <li key={route}>
                            <Link href={route} className=" hover:text-sky-500" >
                                {label}
                            </Link >
                        </li>
                    ))}
                </ul>
            </nav>
        </header>

    )
}
