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

        let selectedRegionStr = "Select a Region", selectedStoreStr = "Select a Store", selectedStoreAddress = "", selectedManagerStr = "";
        if (selectedRegion != "All") {
            selectedRegionStr = selectedRegion;
            if (selectedStore != null) {
                storeImageUrl = imageUrl + selectedStore.storeName + ".jpg";
                selectedStoreStr = selectedStore.storeName;
                selectedStoreAddress = selectedStore.address;
                selectedManagerStr = selectedStore.manager;

            }
        }
        else if (selectedRegion == "All" && selectedStore != null) {
            storeImageUrl = imageUrl + selectedStore.storeName + ".jpg";
            selectedStoreStr = selectedStore.storeName;
            selectedStoreAddress = selectedStore.address;
            selectedManagerStr = selectedStore.manager;
        }

        return (
            <div className="flex flex-col w-full h-full bg-slate-950 overflow-hidden">
                <div className="h-16 w-full px-6 flex items-center bg-slate-900 border-b border-slate-800 shadow-md z-10">
                    <h1 className="text-xl font-bold text-slate-100 tracking-wide">{this.state.docTitle}</h1>
                </div>
                
                <div className="flex flex-1 p-6 gap-6 overflow-hidden">
                    {/* Left Panel: Store Info */}
                    <div className="w-1/3 flex flex-col gap-6 overflow-y-auto pr-2">
                        <div className="bg-slate-900 rounded-xl shadow-lg overflow-hidden border border-slate-800">
                            <div className="h-64 overflow-hidden relative group">
                                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={storeImageUrl} alt="Store" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h2 className="text-2xl font-bold">{selectedStoreStr}</h2>
                                    <p className="text-slate-300 text-sm">{selectedRegionStr}</p>
                                </div>
                            </div>
                            
                            <div className="p-6 space-y-4">
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Address</p>
                                    <p className="text-slate-200">{selectedStoreAddress || "No address available"}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Manager</p>
                                    <p className="text-slate-200">{selectedManagerStr || "N/A"}</p>
                                </div>
                                <div className="pt-4 border-t border-slate-800">
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        Retail analytics is the process of using analytical tools to provide analysis of business trends,
                                        patterns, and performance in the retail industry.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel: Dashboards */}
                    <div className="flex-1 flex flex-col gap-6 overflow-y-auto pb-4">
                        <div className="grid grid-cols-2 gap-6 h-64">
                            <div className="bg-slate-900 rounded-xl shadow-lg border border-slate-800 p-1 overflow-hidden">
                                <iframe className="w-full h-full rounded-lg bg-slate-800" title="Scenario View 1" src={scenario1Url ? `${serverUrl}${scenario1Url}` : ''} />
                            </div>
                            <div className="bg-slate-900 rounded-xl shadow-lg border border-slate-800 p-1 overflow-hidden">
                                <iframe className="w-full h-full rounded-lg bg-slate-800" title="Scenario View 2" src={scenario2Url ? `${serverUrl}${scenario2Url}` : ''} />
                            </div>
                        </div>
                        
                        <div className="flex-1 bg-slate-900 rounded-xl shadow-lg border border-slate-800 flex flex-col p-1">
                            <div className="px-4 py-2 border-b border-slate-800 mb-1">
                                <h3 className="text-slate-200 font-semibold">Monthly Sales Analysis</h3>
                            </div>
                            <div className="flex-1 overflow-hidden relative">
                                <iframe className="w-full h-full rounded-lg bg-slate-800 absolute inset-0" title="Scenario View 3" src={scenario3Url ? `${serverUrl}${scenario3Url}` : ''} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}