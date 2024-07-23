import { Link } from "react-router-dom"
import PropTypes from 'prop-types';  

const SuperAdminAllAssetsCard = ({asset}) => {
    const {id,name,category,serial_number,tag,asset_type} = asset
    return (
        <div className="md:super-admin-all-assets-card-md sm:super-admin-all-assets-card-sm | shadow grid bg-neutral-100 dark:bg-neutral-600 dark:text-neutral-200">
        {/* Card Img */}
        <img className="super-admin-all-assets-card-img"
            src="https://smartbuy.co.ke/wp-content/uploads/2023/08/HP-Spectre-x360-14-ef0024na-front-image.jpg"
            alt="unsplash-radom" />
        {/* Card Details */}
        <div className="super-admin-all-assets-card-info | flow">
            <p className="capitalize super-admin-all-assets-card-info-p"><span className="font-semibold">name:</span> {name}</p>
            <p className="capitalize super-admin-all-assets-card-info-p"><span className="font-semibold">serial:</span> {serial_number}</p>
            <p className="capitalize super-admin-all-assets-card-info-p"><span className="font-semibold">tag no:</span> {tag}</p>
            <p className="capitalize super-admin-all-assets-card-info-p"><span className="font-semibold">category:</span> {category}</p>
            <p className="capitalize super-admin-all-assets-card-info-p"><span className="font-semibold">type:</span> {asset_type}</p>
            {/* Card Btn */}
            <div className="sm:super-admin-all-assets-card-btns-wrapper-sm md:super-admin-all-assets-card-btns-wrapper-md super-admin-all-assets-card-btns-wrapper | flex">
                <button className="btn primary-btn uppercase text-300 font-bold">delete</button>
                <Link className="link capitalize" to={`asset/${id}`}>details</Link>
            </div>
        </div>
    </div>
    )
}

export default SuperAdminAllAssetsCard

SuperAdminAllAssetsCard.propTypes = {
    asset:PropTypes.object
}