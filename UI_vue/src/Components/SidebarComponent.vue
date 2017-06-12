    <template>
  <aside class="sidebar">
                <div class="sidebar-container">
                    <div class="sidebar-header">
                        <div class="brand">
                            <!--Logo-->
                            <div class=""> <span class="l l1"></span>
                                <span class="l l2"></span>
                                <span class="l l3"></span>
                                <span class="l l4"></span>
                                <span class="l l5"></span>
                            </div class="red-logo" S><img src="img/Arctools Transparent.png" alt="Arctools Logo" height="50"
                                width="200"></div>
                    </div>

                    <nav class="menu">
                        <ul class="nav metismenu" id="sidebar-menu">
                            <li class="active">
                                <router-link to="/"><i class="fa fa-home"></i>Dashboard</router-link>
                            </li>
                            <li>
                                <a href=""> <i class="fa fa-bar-chart"></i> Analytics <i class="fa arrow"></i> </a>
                                <ul>
                                    <li> <a href="items-list.html">New</a> </li>
                                    <li> <a href="item-editor.html">View</a> </li>
                                    <li> <router-link to="/history">History</router-link> </li>
                                </ul>
                            </li>
                            <li>
                                <a href=""> <i class="fa fa-plug"></i> Connections <i class="fa arrow"></i> </a>
                                <ul>
                                    <li> <router-link to="/connections">View</router-link></li>
                                    <li> <a href="#" data-toggle="modal" data-target="#new-ora-con"> Oracle </a>
                                        <li> <a href="#" data-toggle="modal" data-target="#new-sql-con">SQL Server</a></li>
                                </ul>
                                </li>
                                <li>
                                    <a href="" data-toggle="modal" data-target="#SettingsModal"> <i class="fa fa-gear"></i> Settings </a>
                                </li>
                        </ul>
                    </nav>
                </div>

            </aside>

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