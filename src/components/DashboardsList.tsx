import * as React from "react";
import { FaChevronDown } from "react-icons/fa";

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
            openRegions: false,
            openStores: false
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
                        <li key={i} className="flex h-[35px] pl-[55px] cursor-auto text-[#ebebeb] items-center bg-transparent border-0 hover:bg-black/10 hover:text-[#ebebeb]" onClick={() => this.onStoreClick(store)}>
                            <h3 title={store.storeName} className="overflow-hidden m-0 cursor-default text-ellipsis text-[12px] font-bold">{store.storeName}</h3>
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
                        <li key={i} className="flex h-[35px] pl-[55px] cursor-auto text-[#ebebeb] items-center bg-transparent border-0 hover:bg-black/10 hover:text-[#ebebeb]" onClick={() => this.onStoreClick(store)}>
                            <h3 title={store.storeName} className="overflow-hidden m-0 cursor-default text-ellipsis text-[12px] font-bold">{store.storeName}</h3>
                        </li>
                    )
                });
            }
        }

        return (
            <div className="relative overflow-hidden w-[300px] min-w-[300px] h-full pt-0 shadow-[0_0_5px_2px_rgba(0,0,0,0.4)] text-[#ebebeb] bg-[#182230]">
                <div className="h-[80px] w-[300px] align-middle text-left text-[20px] px-[20px] py-[2px] bg-black text-white mb-[20px] flex items-center">
                    <img className="ml-[10px] mt-[10px] h-[60px] w-[220px]" src="/images/Sales_Store_Logo.png" alt="logo" />
                </div>
                <div className="shadow-[0px_1px_0px_0px_#121923]">
                    <button className="text-left pl-[30px] w-full bg-transparent text-[#ebebeb] mt-0 border-none shadow-none flex items-center py-2"
                        onClick={() => this.setState({ openRegions: !openRegions })}
                        aria-controls="example-collapse-text"
                        aria-expanded={openRegions}>
                        <FaChevronDown />&nbsp;
                        Region
                    </button>
                    {this.state.openRegions && (
                        <ul className="w-full list-none p-0 m-0">
                            {regionsList.map((region, index) => (
                                <li key={index} className="flex h-[35px] pl-[55px] cursor-auto text-[#ebebeb] items-center bg-transparent border-0 hover:bg-black/10 hover:text-[#ebebeb]" onClick={() => this.onRegionClick(region.name)}>
                                    <h3 title={region.name} className="overflow-hidden m-0 cursor-default text-ellipsis text-[12px] font-bold">{region.name}</h3>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="overflow-hidden pt-[10px] shadow-[0px_1px_0px_0px_#121923]">
                    <button className="text-left pl-[30px] w-full bg-transparent text-[#ebebeb] mt-0 border-none shadow-none flex items-center py-2"
                        onClick={() => this.setState({ openStores: !openStores })}
                        aria-controls="example-collapse-text"
                        aria-expanded={openStores}>
                        <FaChevronDown />&nbsp;
                        Store
                    </button>
                    {this.state.openStores && (
                        <div>
                            <div className="h-[40vh] overflow-auto">
                                <ul className="w-full list-none p-0 m-0">
                                    {stores}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}