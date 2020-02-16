import React from "react";
import Beta from "../../layout/Beta"

const Practice = () => {

    const racticeAlpha = () => {
        const arr = [{
            href: "/#/dom43",
            title: "DOM43"
        },{
            href: "/#/js43",
            title: "JS43"
        },{
            href: "/#/css17",
            title: "CSS17"
        }]
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