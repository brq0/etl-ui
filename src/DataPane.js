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
    }

    render() {
        return (
            <div className="DataPane">
                    <table id="dbTable">
                            <thead>
                                <tr>
                                    <th>Test</th>
                                    <th>Test</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                  <th>Test1</th>
                                  <th>Temp1</th>
                                </tr>
                                <tr>
                                  <th>Test2</th>
                                  <th>Temp2</th>
                                </tr>
                            </tbody>
                        </table>
            </div>
        );
    }
}

export default DataPane;
