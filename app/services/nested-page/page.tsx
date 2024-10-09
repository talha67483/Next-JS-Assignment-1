import Style from "./nested.module.css"
 export default function NestedPage(){
    return (
        <div id={Style.nested}>
            <h2>
                This is nested page 
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto vitae animi est labore totam dolorum!
                            </p>
        </div>
    )
}