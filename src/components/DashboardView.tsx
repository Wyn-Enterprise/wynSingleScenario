import * as React from "react";
import "../styles/DashboardView.scss";
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
            <div className="dashboardView">
                <div className="itemBar">
                    {this.state.docTitle}
                </div>
                <div className="dashView">
                    <div className="selection">
                        <div>
                            <img className="imgStore" src={storeImageUrl} alt="logo" />
                        </div>
                        <div className="selected">
                            <div className="selectedRegion">
                                {selectedRegionStr}
                            </div>
                            <div className="selectedRegion">
                                {selectedStoreStr}
                            </div>
                            <div className="selectedRegion">
                                {selectedStoreAddress}
                            </div>
                            <div className="selectedRegion">
                                {selectedManagerStr}
                            </div>
                        </div>
                        <div className="analytics">
                            Retail analytics is the process of using analytical tools to provide analysis of business trends,
                            patterns, and performance in the retail industry. Retail business analytics allow you to leverage
                            data-driven insight from your business and your customers to improve the customer experience,
                            increase your sales, and optimize operations.
                        </div>
                    </div>
                    <div className="scenarioViewer">
                        <div className="scenarios">
                            <div className="viewer1">
                                <iframe className="dashboard-preview" title="Scenario View" src={scenario1Url ? `${serverUrl}${scenario1Url}` : ''} />
                            </div>
                            <div className="viewer1">
                                <iframe className="dashboard-preview" title="Scenario View" src={scenario2Url ? `${serverUrl}${scenario2Url}` : ''} />
                            </div>
                        </div>
                        <div className="chartViewer">
                            <div className="chartTitle">
                                <span>Monthly Sales</span>
                            </div>
                            <div className="viewer2">
                                <iframe className="dashboard-preview" title="Scenario View" src={scenario3Url ? `${serverUrl}${scenario3Url}` : ''} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}