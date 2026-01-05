import * as React from "react";
import DashboardsList from "./DashboardsList";

export default class DashboardView extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            scenarioURL: null,
            docTitle: 'Retail Sales Analysis',
        };
    }

    public render() {
        const { serverUrl, selectedRegion, selectedStore, scenario1Url, scenario2Url, scenario3Url, scenario4Url } = this.props;
        const imageUrl = "/images/";
        let storeImageUrl = imageUrl + "CommonStore.jpg";

        let selectedRegionStr = "", selectedStoreStr = "", selectedStoreAddress, selectedManagerStr;
        if (selectedRegion != "All") {
            selectedRegionStr = "Region : " + selectedRegion;
            if (selectedStore != null) {
                storeImageUrl = imageUrl + selectedStore.storeName + ".jpg";
                selectedStoreStr = " Store : " + selectedStore.storeName;
                selectedStoreAddress = selectedStore.address;
                selectedManagerStr = "Store Manager : " + selectedStore.manager;

            }
        }
        else if (selectedRegion == "All" && selectedStore != null) {
            storeImageUrl = imageUrl + selectedStore.storeName + ".jpg";
            selectedStoreStr = " Store : " + selectedStore.storeName;
            selectedStoreAddress = selectedStore.address;
            selectedManagerStr = "Store Manager : " + selectedStore.manager;
        }

        return (
            <div className="flex flex-col w-full h-full text-center bg-cover bg-[#182230]">
                <div className="h-[50px] w-full text-left px-[20px] py-[5px] text-[18px] flex items-center bg-[#121923] text-white">
                    {this.state.docTitle}
                </div>
                <div className="flex h-[90%]">
                    <div className="mt-[10px] items-center w-[30vw]">
                        <div>
                            <img className="h-[40vh] w-[30vw] max-h-full pl-[40px] pt-[40px]" src={storeImageUrl} alt="logo" />
                        </div>
                        <div className="ml-[40px] mt-[30px] text-white">
                            <div className="text-left text-[16px] flex">
                                {selectedRegionStr}
                            </div>
                            <div className="text-left text-[16px] flex">
                                {selectedStoreStr}
                            </div>
                            <div className="text-left text-[16px] flex">
                                {selectedStoreAddress}
                            </div>
                            <div className="text-left text-[16px] flex">
                                {selectedManagerStr}
                            </div>
                        </div>
                        <div className="ml-[40px] mt-[20px] text-left text-[#fcf4bf] text-[14px] flex break-normal">
                            Retail analytics is the process of using analytical tools to provide analysis of business trends,
                            patterns, and performance in the retail industry. Retail business analytics allow you to leverage
                            data-driven insight from your business and your customers to improve the customer experience,
                            increase your sales, and optimize operations.
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="flex mt-[50px] ml-[40px] content-center text-center">
                            <div className="flex flex-col text-center h-[200px] ml-[30px] mr-[20px] w-[40%]">
                                <iframe className="overflow-scroll overflow-x-hidden overflow-y-auto bg-transparent w-full h-full border-0 bg-[#e5e5e5] flex-grow justify-center items-start" title="Scenario View" src={scenario1Url ? `${serverUrl}${scenario1Url}` : ''} />
                            </div>
                            <div className="flex flex-col text-center h-[200px] ml-[30px] mr-[20px] w-[40%]">
                                <iframe className="overflow-scroll overflow-x-hidden overflow-y-auto bg-transparent w-full h-full border-0 bg-[#e5e5e5] flex-grow justify-center items-start" title="Scenario View" src={scenario2Url ? `${serverUrl}${scenario2Url}` : ''} />
                            </div>
                        </div>
                        <div className="flex flex-col mt-[30px] ml-0 content-center text-center">
                            <div className="text-center text-white">
                                <span>Monthly Sales</span>
                            </div>
                            <div className="flex flex-col text-center h-[40vh] ml-[70px] w-[85%]">
                                <iframe className="overflow-scroll overflow-x-hidden overflow-y-auto bg-transparent w-full h-full border-0 bg-[#e5e5e5] flex-grow justify-center items-start" title="Scenario View" src={scenario3Url ? `${serverUrl}${scenario3Url}` : ''} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}