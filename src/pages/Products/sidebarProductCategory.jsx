


const Navbar= ({menulist}) => {

    return (
        <>
            <nav className="menu-navbar">
                <h2>Categories</h2>
                <div className="menu-btn-group">
                    {menuList.map((curElem) => (
                        <button
                            key={curElem}
                            className="menu-btn-group__item"
                            onClick={() => filterItem(curElem)}>
                            {curElem}
                        </button>
                    ))}
                </div>
            </nav>
        </>
    );
};

export default Navbar;