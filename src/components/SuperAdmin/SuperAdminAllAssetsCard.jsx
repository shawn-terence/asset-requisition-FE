import { NavLink } from "react-router-dom"

const SuperAdminAllAssetsCard = () => {
  return (
        <div className="md:super-admin-all-assets-card-md sm:super-admin-all-assets-card-sm | shadow grid bg-neutral-100 dark:bg-neutral-600 dark:text-neutral-200">
        {/* Card Img */}
        <img className="super-admin-all-assets-card-img"
            src="https://smartbuy.co.ke/wp-content/uploads/2023/08/HP-Spectre-x360-14-ef0024na-front-image.jpg"
            alt="unsplash-radom" />
        {/* Card Details */}
        <div className="super-admin-all-assets-card-info | flow">
            <p className="capitalize super-admin-all-assets-card-info-p"><span className="font-semibold">name:</span> HP Spectre x360
                2-in-1 Laptop 14t-eu000, 14</p>
            <p className="capitalize super-admin-all-assets-card-info-p"><span className="font-semibold">serial:</span> 0000000000</p>
            <p className="capitalize super-admin-all-assets-card-info-p"><span className="font-semibold">tag no:</span> 0000000000</p>
            <p className="capitalize super-admin-all-assets-card-info-p"><span className="font-semibold">category:</span> electronics</p>
            <p className="capitalize super-admin-all-assets-card-info-p"><span className="font-semibold">type:</span> laptop</p>
            {/* Card Btn */}
            <div className="sm:super-admin-all-assets-card-btns-wrapper-sm md:super-admin-all-assets-card-btns-wrapper-md super-admin-all-assets-card-btns-wrapper | flex">
                <button className="btn primary-btn uppercase text-300 font-bold">delete</button>
                <NavLink className="link capitalize" to="#">details</NavLink>
            </div>
        </div>
    </div>
  )
}

export default SuperAdminAllAssetsCard