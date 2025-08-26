import { useRoutes } from "react-router";
import { routes } from "../../routes";

function AllRoutes(){
    const element = useRoutes(routes())
    return(
        <>
            {element}
        </>
    );
};

export default AllRoutes;