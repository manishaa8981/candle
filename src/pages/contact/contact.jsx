import HomeNavbar from "../component/homenavbar.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

const Contact = () => {

    const [categories,setCategories] = useState([]);

    const fecthCategories = async () => {
        const response = await axios.get('http://localhost:8081/category/findAll');
        setCategories(response.data);
        console.log(response.data);
    }


    useEffect(()=>{
        fecthCategories();
    }, []);


return (
<>
<HomeNavbar/>
{/*<h1 >Contact Page</h1>*/}
    <div className={"categ"}>
        <div className="list">
            {categories.map((i) => (
                <div key={i.id} className="item">
                    <img src={i.categoryImage} alt="i.Images"/>
                    <div className="content">
                        <h1>{i.name}</h1>
                        <div className={"btn-style"}>
                            <h4><a>VIEW PRODUCTS</a></h4>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>


</>
)
}




export default Contact


// eslint-disable-next-line react/prop-types
// const ImageItem = ({ src, title, description }) => (
//     <div className="item">
//         <img src={src} alt="" style={imageStyles} />
//         <div className="content" style={contentStyles}>
//             <h1>{title}</h1>
//             <div className="des">{description}</div>
//         </div>
//     </div>
// );
// // Inline styles
// const bodyStyles = {
//     backgroundColor: '#0C0F20',
//     margin: 0,
//     minHeight: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
// };
//
// const listStyles = {
//     width: '1500px',
//     display: 'grid',
//     gridTemplateColumns: 'repeat(5, 1fr)',
//     gridTemplateRows: '450px',
//     gap: '50px',
// };
//
// const imageStyles = {
//     width: '100%',
//     height: '100%',
//     borderRadius: '20px',
//     objectFit: 'cover',
//     transition: '0.5s',
// };
//
// const contentStyles = {
//     position: 'absolute',
//     bottom: 0,
//     color: '#fff',
//     padding: '20px',
//     transform: 'translateY(100px)',
//     opacity: 0,
//     transition: '0.5s',
// };
// // App.js
//
//
//     <div style={bodyStyles}>
//         <div className="list" style={listStyles}>
//
//             <ImageItem
//                 src="src/assets/img.png"
//                 title="IMAGE NAME"
//                 description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ut adipisci saepe laboriosam assumenda dolorem fuga natus, inventore a perspiciatis accusamus aperiam sequi cupiditate velit repellendus reiciendis deleniti praesentium sit?"
//             />
//
//             <ImageItem
//                 src="src/assets/img.png"
//                 title="IMAGE NAME"
//                 description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ut adipisci saepe laboriosam assumenda dolorem fuga natus, inventore a perspiciatis accusamus aperiam sequi cupiditate velit repellendus reiciendis deleniti praesentium sit?"
//             />
//
//             {/* Repeat the above pattern for other images */}
//
//         </div>
//     </div>
