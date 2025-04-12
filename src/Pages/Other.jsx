// import React, { useContext } from "react";
// import { AppContext } from "../Context/Context";
// import Explore from "../Components/Explore/Explore";

// const Other = (props) => {
//     const {Other} = useContext(AppContext);
//   return (
//     <div>
//       {Other.map((explore,i) => {
//         if (props.category === explore.category) {
//             return (
//                 <Explore
//                  key={i}
//                  id={explore.id}
//                  viedo={explore.viedo}
//                  title={explore.title}
//                  subtitle={explore.subtitle}
//                  description={explore.description}  
//                 />
                 
//             );
//             return null;
//         }
//       })

//       }
//     </div>
//   )
// }

// export default Other



import React, { useContext } from "react";
import { AppContext } from "../Context/Context";
import Explore from "../Components/Explore/Explore";

const Other = (props) => {
    const { Other } = useContext(AppContext);

    return (
        <div>
            {Other.map((explore, i) => {
                if (props.category === explore.category) {
                    return (
                        <Explore
                            key={i}
                            id={explore.id}
                            viedo={explore.viedo}  // Fixed typo here
                            title={explore.title}
                            subtitle={explore.subtitle}
                            description={explore.description}  
                        />
                    );
                }
                return null;  // This is redundant and can be removed
            })}
        </div>
    );
};

export default Other;