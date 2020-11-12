import * as React from "react";
import "../styles/DashboardsList.scss";
import { Collapse, Button } from 'react-bootstrap';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

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
                        <li key={i} className="list-group-item" onClick={() => this.onStoreClick(store)}>
                            <h3 title={store.storeName}>{store.storeName}</h3>
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
                        <li key={i} className="list-group-item" onClick={() => this.onStoreClick(store)}>
                            <h3 title={store.storeName}>{store.storeName}</h3>
                        </li>
                    )
                });
            }
        }

        return (
            <div className="dashboardsList">
                <div className="topBar">
                    <img className="logoImg" src="/images/Sales_Store_Logo.png" alt="logo" />
                </div>
                <div className="regionsList">
                    <Button className="headerButton"
                        onClick={() => this.setState({ openRegions: !openRegions })}
                        aria-controls="example-collapse-text"
                        aria-expanded={openRegions}>
                        <FaChevronDown />&nbsp;
                        Region
                    </Button>
                    <Collapse in={this.state.openRegions}>
                        <ul className="list-group list-group-flush">
                            {regionsList.map((region, index) => (
                                <li key={index} className="list-group-item" onClick={() => this.onRegionClick(region.name)}>
                                    <h3 title={region.name}>{region.name}</h3>
                                </li>
                            ))}
                        </ul>
                    </Collapse>
                </div>
                <div className="storesList">
                    <Button className="headerButton"
                        onClick={() => this.setState({ openStores: !openStores })}
                        aria-controls="example-collapse-text"
                        aria-expanded={openStores}>
                        <FaChevronDown />&nbsp;
                        Store
                    </Button>
                    <Collapse in={this.state.openStores}>
                        <div>
                            <div className="storesDiv">
                                <ul className="list-group list-group-flush">
                                    {stores}
                                </ul>
                            </div>
                        </div>
                    </Collapse>
                </div>
            </div>
        );
    }
}
