import { IoIosArrowDropleftCircle , IoIosArrowDroprightCircle } from "react-icons/io";

const Pagination = ({items, currentPage, pageSize, onPageChange})=>{

  const pagesCount = Math.ceil(items/pageSize)

  if(pagesCount===1 ) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  const previousPage = (page)=>{
    console.log('pv')
    if(page > 1){
      onPageChange(page-1);
    }
  }
  
  const fowardPage = (page)=>{
    console.log('click fw')
    if(page < pagesCount){
      onPageChange(page+1) ;
    }
  }

  return(
    <div className="pagination"> 
      <button onClick={()=>previousPage(currentPage)}>
        <IoIosArrowDropleftCircle size={34}/>
      </button>
      
      {currentPage} / {pagesCount}

      <button onClick={()=>fowardPage(currentPage)}> 
        <IoIosArrowDroprightCircle size={34}/>
      </button>
      
    </div>
  )
}

export default Pagination;