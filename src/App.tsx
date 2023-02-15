import * as React from 'react';
import './styles/App.scss';
import DashboardView from './components/DashboardView';
import DashboardsList from './components/DashboardsList';

export default class App extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            token: 'dea83533c9bd2a7f941c0483afeb1962293cb00c895afb05bfb43cde977e0757',
            serverURL: 'https://wyn-demo.grapecity.com/',
            dashboardID: 'bf8eb401-4a29-4ccf-8b8b-e4d6213ef779',
            docTitle: 'Retail Sales Analysis',
            documentType: 'dbd',
            scenarioURL: '',
            selectedStore: null,
            selectedRegion: 'All'
        };

        this.regionSelected = this.regionSelected.bind(this);
        this.storeSelected = this.storeSelected.bind(this);
        this.generateScenarioUrl = this.generateScenarioUrl.bind(this);
    }

    generateScenarioUrl = (scenarioName) => {
        let url = "", params = "";
        const { selectedRegion, selectedStore } = this.state;

        if (selectedRegion != "All") {
            params = `&dp={"Geography":["${selectedRegion}"]`;
            if (selectedStore != null) {
                params += `,"StoreName":["${selectedStore.storeName}"]`;
            }
            params += "}";
        }
        else {
            if (selectedStore != null) {
                params = `&dp={"StoreName":["${selectedStore.storeName}"]}`;
            }
        }

        url = `/dashboards/view/${this.state.dashboardID}?token=${this.state.token}${params}&scenario=${scenarioName}&size=fittoscreen
                &actions=clearselection&openfulldashboardmode=newwindow`;
        return url;
    }

    regionSelected = (region) => {
        this.setState({ selectedRegion: region, selectedStore: null });
    }

    storeSelected = (selectedStore) => {
        this.setState({ ...this.state, selectedStore });
    }

    render() {

        const { selectedRegion, selectedStore, serverURL } = this.state;

        const scenario1Url = this.generateScenarioUrl("column-1");
        const scenario2Url = this.generateScenarioUrl("column-3");
        const scenario3Url = this.generateScenarioUrl("column-9");
        const scenario4Url = this.generateScenarioUrl("column-10");

        const Application = (
            <div className="App">
                <div className="boxShadow">                    
                    <DashboardsList regionSelected={this.regionSelected} storeSelected={this.storeSelected} />
                </div>
                <DashboardView selectedRegion={selectedRegion} selectedStore={selectedStore} scenario1Url={scenario1Url} scenario2Url={scenario2Url}
                    scenario3Url={scenario3Url} scenario4Url={scenario4Url} serverUrl={serverURL} />
            </div>
        );

        return Application;
    }
}
