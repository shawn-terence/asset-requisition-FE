
const addFilterBtns = (array) =>{
      let filter = []
      for( const item of array){
        if(!(filter.includes(item.category.toLowerCase()))){
          filter.push(item.category.toLowerCase())
        }
      }
      return filter
    }


export {addFilterBtns}