<template>
<div>
                <div class="row">
                    <div class="col-md-12">
                        <table id="datatable" class="table table-striped" cellspacing="0" width="90%">
                            <thead>
                                <tr>
                                    <th>Connection Name</th>
                                    <th>Type</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td id="ORA_1">ORA_1</td>
                                    <td>Oracle</td>
                                    <td>Enabled</td>
                                </tr>
                                <tr>
                                    <td>ORA_2</td>
                                    <td>Oracle</td>
                                    <td>Enabled</td>
                                </tr>
                                <tr>
                                    <td>SQL_1</td>
                                    <td>SQL</td>
                                    <td>Disabled</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="header-block">
                            <div class="btn-group pull-right">
                                <button class="btn btn-primary btn-sm rounded run" type="button" aria-haspopup="true" aria-expanded="false"> Run Analytic</button>
                                <div class="pull-right">
                                    <button type="button" class="btn btn-sm  btn-bars fa fa-bars  dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                    <span class="sr-only">Toggle Dropdown</span>
                                </button>
                                    <div class="dropdown-menu" id="dropdownOptions">
                                        <a class="dropdown-item" href="#"><i class="fa fa-play icon">&nbsp&nbsp</i>Run</a>
                                        <a class="dropdown-item" href="#"><i class="fa fa-download icon">&nbsp</i>Download</a>
                                        <a class="dropdown-item" href="#"><i class="fa fa-envelope icon">&nbsp</i>Email</a>
                                        <a class="dropdown-item" href="#"><i class="fa fa-trash-o icon">&nbsp&nbsp</i>Remove</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#"> <i class="fa fa-info-circle icon">&nbsp</i>Details </a>
                                    </div>
                                </div>
                                <div class="pull-right">
                                    <button type="button" class="btn btn-sm  btn-bars fa fa-external-link  dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                    <span class="sr-only">Toggle Dropdown</span>
                                </button>
                                    <div class="dropdown-menu" id="dropdownExport">
                                        <a class="dropdown-item" href="#" onClick="$('#table1').tableExport({type:'pdf',escape:'false'});">PDF</a>
                                        <a class="dropdown-item" href="#" onClick="$('#table1').tableExport({type:'excel',escape:'false'});">Excel</a>
                                        <a class="dropdown-item" href="#" onClick="$('#table1').tableExport({type:'doc',escape:'false'});">Word</a>
                                        <a class="dropdown-item" href="#" onClick="$('#table1').tableExport({type:'csv',escape:'false'});">CSV</a>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div id="card" class="chart-padding">
                            <div class=" front ">
                                <canvas id="myBar" width="60" height="40"></canvas>
                            </div>

                            <div class=" back ">
                                <table class="table table-striped" id="table1">
                                    <thead>
                                        <tr>
                                            <th>New Connection</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>John</td>
                                            <td>Carter</td>
                                            <td>johncarter@mail.com</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Peter</td>
                                            <td>Parker</td>
                                            <td>peterparker@mail.com</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>John</td>
                                            <td>Rambo</td>
                                            <td>johnrambo@mail.com</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>John</td>
                                            <td>Carter</td>
                                            <td>johncarter@mail.com</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Peter</td>
                                            <td>Parker</td>
                                            <td>peterparker@mail.com</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div id="card" class="chart-padding">
                            <div class="card-block">
                                <h4 class="card-title">Details</h4>
                                <hr />
                                <div id="cardDetails">
                                    <h5>Connection:</h5>
                                    ORA_UAT
                                    <h5>Rows:</h5>
                                    12
                                    <h5>Last Run:</h5>
                                    ORA_UAT
                                    <h5>Time To Run:</h5>
                                    24/04/2017 11:03
                                    <h5>Parameters:</h5>
                                    None
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
</div>
                </template>

<script>
    export default {
        data() {
            return {
                announcement: 'The site will go down for maintenance soon!'
            };
        }
    }
</script>