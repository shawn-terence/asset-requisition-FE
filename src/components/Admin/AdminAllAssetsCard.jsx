import { Link } from "react-router-dom"
import PropTypes from 'prop-types';  


const AdminAllAssetsCard = ({asset}) => {
  const {id,name,category,serial_number,tag,asset_type} = asset
  return (
    <div className="md:admin-all-assets-card-md sm:admin-all-assets-card-sm | shadow grid bg-neutral-100 dark:bg-neutral-600 dark:text-neutral-200">
        {/* Card Img */}
        <img className="admin-all-assets-card-img md:admin-all-assets-card-img"
            src="https://smartbuy.co.ke/wp-content/uploads/2023/08/HP-Spectre-x360-14-ef0024na-front-image.jpg"
            alt="unsplash-radom" />
        {/* Card Details */}
        <div className="admin-all-assets-card-info | flow">
            <p className="capitalize admin-all-assets-card-info-p"><span className="font-semibold">name:</span>{name}</p>
            <p className="capitalize admin-all-assets-card-info-p"><span className="font-semibold">serial:</span>{serial_number}</p>
            <p className="capitalize admin-all-assets-card-info-p"><span className="font-semibold">tag no:</span> {tag}</p>
            <p className="capitalize admin-all-assets-card-info-p"><span className="font-semibold">category:</span> {category}</p>
            <p className="capitalize admin-all-assets-card-info-p"><span className="font-semibold">type:</span>{asset_type}</p>
            {/* Card Btn */}  
            <div className="admin-all-assets-btn-wrapper">
            <Link className="admin-all-assets-btn | btn ghost-btn link capitalize" to={`asset/${id}`}>details</Link>            
            </div>          
        </div>
    </div>
  )
}

export default AdminAllAssetsCard

AdminAllAssetsCard.propTypes = {
    asset:PropTypes.object
}