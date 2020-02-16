import React from "react";
import Beta from "../../layout/Beta"

function url2Link(url:string){
    return window.location.origin + window.location.pathname + "#/" + url;
}

const Practice = () => {

    const racticeAlpha = () => {
        const arr = [{
            href: url2Link("dom43"),
            title: "DOM43"
        },{
            href: url2Link("js43"),
            title: "JS43"
        },{
            href: url2Link("css17"),
            title: "CSS17"
        }]
        console.log(arr)
        return (
            <div className="layout-practice">
                <h2 className="practice-tile">前端小测</h2>
                <div className="practice-conent">
                    {
                        arr.map((i, index) => {
                            return (
                                <a key={index} target="_blank" rel="noopener noreferrer" href={i.href}
                                   className="practice-item">{i.title}</a>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    const render = () => {
        return (
            <>
                {
                    racticeAlpha()
                }
            </>
        )
    }

    return (
        <Beta title="练习" content={render()}/>
    )
}

export default Practice;