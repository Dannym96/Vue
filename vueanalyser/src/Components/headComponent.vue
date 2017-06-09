    <template>
                <header class="header">
                <div class="header-block header-block-collapse hidden-lg-up"> <button class="collapse-btn" id="sidebar-collapse-btn"><i class="fa fa-bars"></i></button> </div>
                <div class="red-logo"><img src="img/redwaireAnalytics.png" alt="RedWaire Analytics" height="50" width="230"> </div>
                <div class=" pull-right  header-block-search hidden-sm-down">
                    <form role="search">
                        <div class=" input-container"> <i class="fa fa-search "></i> <input type="search" placeholder="Search">
                            <div class=" underline"></div>
                        </div>
                    </form>
                </div>
            </header>
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