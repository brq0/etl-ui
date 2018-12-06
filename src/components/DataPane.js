import React, {Component} from 'react';
import $ from 'jquery';
import axios from "axios/index";
import DataTable from 'datatables.net';
import * as CONF from '../conf/Conf.js';
import '../css/dataTables.css';
import Modal from './ModalPopUp'

class DataPane extends Component {
    constructor(props) {
        super(props);

        this.state = {
            head: ["", "Name", "Category", "Price", "Position",  ""],
            data: [{
                productId: 'elo',
                productName: 'name',
                productCategory: 'category',
                productPrice: '20zl',
                position: 1,
                description: 'dede descriptidiej idejdioadjidsj iadnsaidajs iodasjodjas'
                },
                {
                    productId: 'elo',
                    productName: 'name',
                    productCategory: 'category',
                    productPrice: '20zl',
                    position: 1,
                    description: 'dede descriptidiej idejdioadjidsj iadnsaidajs iodasjodjas'
                    }]
        };
    }


    componentDidMount(){
        $('#dbTable').DataTable({
            "columns": [
                { "orderable": false },
                null,
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

     createDescriptionPopUp(desc){
            console.log(desc)
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
                            <th><button onClick={()=> <Modal ite = {this.props.toggle()}/>}>{item.productName}</button></th>
                            <th>{item.productCategory}</th>
                            <th>{item.productPrice}</th>
                            <th>{item.position}</th>
                            <th><button className="buttonDownload" onClick={() => this.downloadTxt(item.productId)}> </button></th>
                         </tr>
                        );
                    })}
                  </tbody>
               </table>
               <button className="generate col-2" onClick={this.downloadCsv}>Generate CSV </button>
            </div>
        );
    }
}

export default DataPane;
