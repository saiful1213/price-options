import PropTypes from "prop-types";

const NavLinks = ({ isSmallDevie }) => {

    const links = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Dashboard', path: '/dashboard' },
        { id: 1, name: 'Faq', path: '/faq' },
    ]

    return (
        <ul className={`flex ${isSmallDevie ? 'flex-col gap-4 mt-4 p-4 rounded-xl' : 'flex-row gap-10'} `}>
            {
                links.map(link => {
                    const { id, name, path } = link;
                    return (
                        <li className={`${isSmallDevie && 'border-b rounded-lg pb-2'}`} key={id}><a href={path} className="text-muted-foreground hover:text-foreground text-sm font-bold">{name}</a></li>
                    )
                })
            }
        </ul>
    )
}

NavLinks.propTypes = {
    isSmallDevie: PropTypes.bool,
}

export default NavLinks;