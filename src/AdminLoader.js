import { Circles } from "react-loader-spinner";

const AdminLoader=()=>{
    return(
        <>
        <div className='loader1'>
        <Circles
        height={80}
        width={80}
        radius={9}
        color="gray"
        ariaLabel="loading"
      
        />
        </div>

        
        </>
    )
}  
export default AdminLoader;
       