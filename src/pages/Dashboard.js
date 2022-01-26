import { ThemeContext } from "../contexts/ThemeContext"
import { useContext } from "react";
import statusCards from "../assets/JsonData/status-card-data.json"
import StatusCards from "../components/StatusCards";

import Graph2 from '../components/Graph2';

const Dashboard = () => {

    // const { toggle } = useContext(ThemeContext);

// 
//     return (

//        // <section className={toggle ? "dashboardContainer__isDark" : "dashboardContainer"}>
//             // {
//             //     statusCards.map((item, index) => (
//                    // <div className={toggle ? "dashboardContainer__isDark--graph" : "dashboardContainer--graph"} key={index}>
//                         // <StatusCards
//                         //     icon={item.icon}
//                         //     count={item.count}
//                         //     title={item.title}
//                         // />
//                         <div>
//                         <Graph/>
//                         <Graph2/>
//                         </div>
//                    // </div>
//              //     ))
//              // }

//         //</section>


//     );
// }

const { toggle } = useContext(ThemeContext);


    return (
         
         <div >
           <div>
          
             <Graph2 height="200"></Graph2>
           
              </div>
         </div>
        
        )
}



export default Dashboard;