const Menu = () =>{
    return(
        <ul className="flex font-semibold" >
            <li className="px-8">
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li className="px-8">
                <Link href="/about">
                    <a>About</a>
                </Link>
            </li>
        </ul>
    )
}