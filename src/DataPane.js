import React, {Component} from 'react';
import $ from 'jquery';
import axios from "axios/index";
import DataTable from 'datatables.net'
import * as CONF from './conf/Conf.js'
import './css/dataTables.css'

$(document).ready(function() {
    $('#dbTable').DataTable();
} )

class DataPane extends Component {
    constructor(props) {
        super(props);

        this.state = {
            head: ["TestCol1", "TestCol2", "Action"],
            data: [["Test1", "Temp1"], ["Test2", "Temp2"]]
        };
    }

    downloadTxt(id){
     axios({
       url: `${CONF.PAGE}/txt?rowId=${id}`,
       method: 'GET',
       responseType: 'blob',
     }).then((response) => {
       const url = window.URL.createObjectURL(new Blob([response.data]));
       const link = document.createElement('a');
       link.href = url;
       link.setAttribute('download', 'record.txt');
       document.body.appendChild(link);
       link.click();
     });
    }

    render() {
        return (
            <div className="DataPane ml-5 mr-5">
                    <table id="dbTable"className="cell-border compact">
                            <thead>
                                <tr>
                                    {this.state.head.map((item, i) => <th key={i}>{item}</th>)}
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.data.map((item, i) =>
                                <tr key={i}>
                                    {this.state.data[i].map((saItem, j) => <th key={j}>{saItem}</th>)}
                                    <th><button onClick={() => this.downloadTxt(i)}> > </button></th>
                                </tr>
                            )}
                            </tbody>
                        </table>
            </div>
        );
    }
}

export default DataPane;
