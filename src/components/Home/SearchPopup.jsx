export default function SearchPopup() {
    return (
        <>
            {/* <!-- Search Popup --> */}
            <div className="search-popup">
                <div className="color-layer"></div>
                <button className="close-search"><span className="flaticon-cancel-1"></span></button>
                <form method="post" action="blog.html">
                    <div className="form-group">
                        <input type="search" name="search-field" value="" placeholder="Search Here" required=""/>
                            <button className="fa fa-solid fa-magnifying-glass fa-fw" type="submit"></button>
                    </div>
                </form>
            </div>
            {/* <!-- End Search Popup --> */}
        </>
    )
}