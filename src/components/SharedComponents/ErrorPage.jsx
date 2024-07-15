

const ErrorPage = () => {
  return (
    <div className="error-pg | 
    bg-[url('https://github.com/Fuego-fuego/asset-requisition-FE/blob/main/public/assets-requisition-system-high-resolution-logo.png?raw=true')]
    dark:bg-[url('https://github.com/Fuego-fuego/asset-requisition-FE/blob/main/public/assets-requisition-system-high-resolution-logo-white.png?raw=true')]    
    ">
        <div className="container">
            <div className="error-message-text | text-center text-neutral-100">
                <p className="font-semibold lg:text-900 md:text-850 sm:text-600">404</p>
                <p className=" lg:text-800 md:text-700 sm:text-600">Sorry, the page has not been found</p>
                <p className="md:text-500 sm:text-400 error-pg-small-text">The link you followed, might be broken or, the page has been moved</p>
            </div>
        </div>
    </div>
  )
}

export default ErrorPage