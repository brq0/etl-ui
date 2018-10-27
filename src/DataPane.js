import React, {Component} from 'react';
import $ from 'jquery';
import DataTable from 'datatables.net'
import './css/dataTables.css'

$(document).ready(function() {
    $('#dbTable').DataTable();
} )

class DataPane extends Component {
    constructor(props) {
        super(props);

        this.state = {
            head: ["TestCol1", "TestCol2"],
            data: [["Test1", "Temp1"], ["Test2", "Temp2"]]
        };
    }

    render() {
        return (
            <div className="DataPane">
                    <table id="dbTable">
                            <thead>
                                <tr>
                                    {this.state.head.map((item, i) => <th key={i}>{item}</th>)}
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.data.map((item, i) =>
                                <tr key={i}>
                                    {this.state.data[i].map((saItem, j) => <th key={j}>{saItem}</th>)}
                                </tr>
                            )}
                            </tbody>
                        </table>
            </div>
        );
    }
}

export default DataPane;
