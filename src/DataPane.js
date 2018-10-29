import React, {Component} from 'react';
import $ from 'jquery';
import axios from "axios/index";
import DataTable from 'datatables.net'
import * as CONF from './conf/Conf.js'
import './css/dataTables.css'

class DataPane extends Component {
    constructor(props) {
        super(props);

        console.log(props.data)

        this.state = {
            head: ["", "Name", "Category", "Price", ""],
            data: props.data
        };
    }

    componentDidMount(){
        $('#dbTable').DataTable({
            "columns": [
                { "orderable": false },
                null,
                null,
                null,
                { "orderable": false }
              ]
        });
    }

    downloadTxt(id){
         axios({
           url: `${CONF.PAGE}/generateTxt?id=${id}`,
           method: 'GET',
           responseType: 'blob',
         }).then((response) => {
           const url = window.URL.createObjectURL(new Blob([response.data]));
           const link = document.createElement('a');
           link.href = url;
           link.setAttribute('download', 'record.txt');
           document.body.appendChild(link);
           link.click();
         })
         .catch(error => {
                if(error.message === 'Network Error') alert("Run etlapp")
         });
    }

    downloadCsv(){
          axios({
            url: `${CONF.PAGE}/generateCsv`,
            method: 'GET',
            responseType: 'blob',
          }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'records.csv');
            document.body.appendChild(link);
            link.click();
          })
          .catch(error => {
                 if(error.message === 'Network Error') alert("Run etlapp")
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
                            {this.state.data.map((item) => {
                                return(
                                            <tr key={item.productId}>
                                             <th><img src={item.productImageUrl} className="h-50"/></th>
                                             <th>{item.productName}</th>
                                             <th>{item.productCategory}</th>
                                             <th>{item.productPrice}</th>
                                             <th><button onClick={() => this.downloadTxt(item.productId)}> > </button></th>
                                            </tr>
                                            );
                            })}
                            </tbody>
                        </table>
                        <button onClick={this.downloadCsv}>Generate CSV </button>
            </div>
        );
    }
}

export default DataPane;
