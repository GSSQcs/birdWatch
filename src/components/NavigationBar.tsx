import logo from '../assets/bird_watching_logo-1.png'


export function NavigationBar() {
    return (
        <div id='navigation-bar' className="flex-container">
            <div id='logo'>
                <img src={logo} alt="logo" />
            </div>
            <div id='navigation-bar-title'>
                Bird Watch
            </div>
            {/* <div id='nagivation-bar-view-region'>
                Search a Region goes here
            </div> */}
            <div id='navigation-bar-collection'>
                <a href="#">Collection</a>
            </div>
            <div id='navigation-bar-username'>
                <a href="#">John Doe</a>
            </div>
        </div>
    )
}