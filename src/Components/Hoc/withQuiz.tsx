import { ComponentType, useContext } from "react";
import { QuizContext } from "../Context/QuizContext";

export function withUser(IncomintComponent: ComponentType<any>) {
    return function OutgoinComponent(props: any) {
        const data = useContext(QuizContext);
        return <IncomintComponent {...props} {...data} />
    }
}