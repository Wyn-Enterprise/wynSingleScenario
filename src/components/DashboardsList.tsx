import * as React from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

export default class DashboardsList extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            regionsList: [{ name: "All" }, { name: "North" }, { name: "South" }, { name: "East" }, { name: "West" }],
            storesList: {
                "North": [
                    { storeName: "Northern A", address: "2301, North Avenue, Los Angeles, CA 90055", manager: "Mike Jones" },
                    { storeName: "Northern B", address: "1801, North Avenue, Los Angeles, CA 90056", manager: "Dave Barnes" },
                    { storeName: "Northern C", address: "428, North Avenue, Los Angeles, CA 90052", manager: "Susan Cunningham" },
                    { storeName: "Northern D", address: "829, North Avenue, Los Angeles, CA 90054", manager: "John Sullivan" }
                ],
                "South": [
                    { storeName: "Southern A", address: "582, South Avenue, Los Angeles, CA 90025", manager: "Bill Carrington" },
                    { storeName: "Southern B", address: "272, South Avenue, Los Angeles, CA 90026", manager: "Suzie Rowan" },
                    { storeName: "Southern C", address: "1403, South Avenue, Los Angeles, CA 90029", manager: "Ray Smith" },
                    { storeName: "Southern D", address: "2301, South Avenue, Los Angeles, CA 90022", manager: "Monica Colby" }
                ],
                "East": [
                    { storeName: "Eastern A", address: "6211, East Avenue, Los Angeles, CA 90046", manager: "Jean Manning" },
                    { storeName: "Eastern B", address: "2421, East Avenue, Los Angeles, CA 90048", manager: "Michael Bay" },
                    { storeName: "Eastern C", address: "452, East Avenue, Los Angeles, CA 90041", manager: "Scott Williams" },
                    { storeName: "Eastern D", address: "1053, East Avenue, Los Angeles, CA 90045", manager: "Joanna Anders" }
                ],
                "West": [
                    { storeName: "Western A", address: "782, West Avenue, Los Angeles, CA 90076", manager: "Thomas Crane" },
                    { storeName: "Western B", address: "2506, West Avenue, Los Angeles, CA 90071", manager: "Miranda Shaffer" },
                    { storeName: "Western C", address: "6011, West Avenue, Los Angeles, CA 90077", manager: "Brandon Kramer" },
                    { storeName: "Western D", address: "3100, West Avenue, Los Angeles, CA 90074", manager: "Helen Levine" }
                ]
            },
            selectedRegion: "All",
            selectedStorelist: [],
            openRegions: true,
            openStores: true
        };
    }

    componentDidMount() {

    }

    onRegionClick = (regName: string,) => {
        this.setState({ selectedRegion: regName });
        this.props.regionSelected(regName);
    }

    onStoreClick = (storeName: string,) => {
        this.props.storeSelected(storeName);
    }

    public render() {
        const { regionsList, storesList, selectedRegion, openRegions, openStores } = this.state;

        var stores = Array();
        if (selectedRegion != "") {
            if (selectedRegion != "All") {
                let selectedRegionStores = storesList[selectedRegion];

                stores = selectedRegionStores.map((store, i) => {
                    return (
                        <li key={i} 
                            className="flex px-6 py-2 cursor-pointer text-slate-400 hover:text-white hover:bg-slate-800 transition-colors duration-200 items-center rounded-md mx-2" 
                            onClick={() => this.onStoreClick(store)}>
                            <h3 title={store.storeName} className="truncate text-sm font-medium">{store.storeName}</h3>
                        </li>
                    )
                });
            }
            else {
                let selectedRegionStores = Array();
                let storeKeys = Object.keys(storesList);
                for (var s in storeKeys) {
                    let storesPerRegion = storesList[storeKeys[s]];
                    storesPerRegion.map((store, i) => {
                        selectedRegionStores.push(store);
                    });
                }

                stores = selectedRegionStores.map((store, i) => {
                    return (
                        <li key={i} 
                            className="flex px-6 py-2 cursor-pointer text-slate-400 hover:text-white hover:bg-slate-800 transition-colors duration-200 items-center rounded-md mx-2" 
                            onClick={() => this.onStoreClick(store)}>
                            <h3 title={store.storeName} className="truncate text-sm font-medium">{store.storeName}</h3>
                        </li>
                    )
                });
            }
        }

        return (
            <div className="flex flex-col w-72 h-full bg-slate-900 border-r border-slate-800 shadow-xl z-10">
                <div className="h-20 flex items-center justify-center bg-slate-950 border-b border-slate-800">
                    <img className="h-12 object-contain" src="/images/Sales_Store_Logo.png" alt="logo" />
                </div>
                
                <div className="flex-1 overflow-y-auto py-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                    <div className="mb-2">
                        <button className="w-full flex items-center px-4 py-3 text-slate-200 font-semibold hover:bg-slate-800 transition-colors focus:outline-none"
                            onClick={() => this.setState({ openRegions: !openRegions })}
                            aria-controls="region-collapse"
                            aria-expanded={openRegions}>
                            <span className="mr-3 text-xs text-slate-500">
                                {openRegions ? <FaChevronDown /> : <FaChevronRight />}
                            </span>
                            Region
                        </button>
                        {openRegions && (
                            <ul className="list-none p-0 m-0 space-y-1">
                                {regionsList.map((region, index) => (
                                    <li key={index} 
                                        className={`flex px-10 py-2 cursor-pointer items-center transition-colors duration-200 rounded-md mx-2
                                            ${selectedRegion === region.name ? 'bg-blue-600/20 text-blue-400 font-semibold' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
                                        onClick={() => this.onRegionClick(region.name)}>
                                        <h3 title={region.name} className="truncate text-sm">{region.name}</h3>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div>
                        <button className="w-full flex items-center px-4 py-3 text-slate-200 font-semibold hover:bg-slate-800 transition-colors focus:outline-none"
                            onClick={() => this.setState({ openStores: !openStores })}
                            aria-controls="store-collapse"
                            aria-expanded={openStores}>
                            <span className="mr-3 text-xs text-slate-500">
                                {openStores ? <FaChevronDown /> : <FaChevronRight />}
                            </span>
                            Store
                        </button>
                        {openStores && (
                            <ul className="list-none p-0 m-0 space-y-1">
                                {stores}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}