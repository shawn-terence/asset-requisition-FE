import {Link} from 'react-router-dom'
import { useParams } from "react-router-dom"
import PropTypes from 'prop-types'

const SuperAdminSingleAssetPage = ({allAssets}) => {
    const {assetId} = useParams()
    const asset = allAssets.find((asset)=> asset.id === parseInt(assetId))

  return (
     <div className="super-admin-single-product-page | shadow bg-neutral-100 dark:bg-neutral-600 dark:text-neutral-200">
      <Link to="/super-admin/all-assets" className="super-admin-single-product-page-close-btn | font-semibold lowercase text-600">x</Link>
      <div className="super-admin-single-product-page-body md:super-admin-single-product-page-body-md super-admin-single-product-page-body-sm | flex">
        {/* Asset Image  */}
        <div className="super-admin-single-product-page-image">
          <img className="super-admin-all-asset-card-img"
            src="https://smartbuy.co.ke/wp-content/uploads/2023/08/HP-Spectre-x360-14-ef0024na-front-image.jpg"
            alt="unsplash-radom" />
        </div>
        {/* Asset Text */}
        <div className="super-admin-single-product-page-text super-admin-single-product-page-text-sm md:super-admin-single-product-page-text-md | flex flex-col ">
          <p className='font-semibold md:text-550'>{asset.name}</p>
          {/* Type and Category*/}
          <div className="super-admin-single-product-page-type-category-wrapper md:super-admin-single-product-page-type-category-wrapper-md  | capitalize text-gray-600 dark:text-gray-300 capitalize flow">
            <p>type: {asset.asset_type}</p>
            <p>category: {asset.category}</p>
          </div>
          {/* Description */}
          <div className="super-admin-single-product-page-description-wrapper md:super-admin-single-product-page-description-wrapper-md | flow">
          <p className='capitalize font-semibold'>description:</p>
          <p>{asset.description}</p>
          </div>
          {/* Serial Number and Tag Number*/}
          <div className="super-admin-single-product-page-serial-tag-wrapper md:super-admin-single-product-page-serial-tag-wrapper-md | text-gray-600 dark:text-gray-300 capitalize flow">
            <p>serial: {asset.asset_type}</p>
            <p>tag number: {asset.serial_number}</p>
          </div>                        
        </div>
      </div>
    </div>
  )
}

export default SuperAdminSingleAssetPage

SuperAdminSingleAssetPage.propTypes = {
  allAssets:PropTypes.array
}
