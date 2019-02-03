import React, { Component } from "react";
import database from '../../../data';
class MobileUnitBoardMinimized extends Component {

    onClickCard = () => {
        this.props.maximiseItem(this.props.unitName, this.props.number)
    }

    render() {
        console.log(this.props);
        const colorList = ['#ebb2fc','#fae0a4','#a4cdfc','#90eea9', 'blue-light']
        let borderColor = colorList[this.props.number]
        return (
        <div
            style={{
            minWidth: "250px",
            overflow: "hidden",
            borderRadius: "6px",
            borderColor: borderColor
            }}
            onClick = {this.onClickCard}
            className="flex max-w-sm overflow-hidden shadow-lg m-2 bg-white border-b-8 flex-col"
        >
            <div className="flex justify-between content-center px-6 py-3 bg-white border-b border-grey-light flex-no-shrink">
            <div className="flex1">
                <i className="text-2xl text-grey fab fa-flickr" />
                <span className=" text-3xl font-semibold ml-4">
                {database.shortenName(this.props.unitName)}
                </span>
            </div>
            <div className="flex1 mt-2">
                <i className="text-xl text-grey-dark fas fa-chevron-down" />
            </div>
            </div>
        </div>
        );
    }
}

export default MobileUnitBoardMinimized;
