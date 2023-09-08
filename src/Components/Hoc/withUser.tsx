import { ComponentType, useContext } from "react";
import { UserContext } from "../Context/UserContext";

export function withUser(IncomintComponent: ComponentType<any>) {
    return function OutgoinComponent(props: any) {
        const data = useContext(UserContext);
        return <IncomintComponent {...props} {...data} />
    }
}