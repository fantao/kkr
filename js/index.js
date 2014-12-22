/**
 * @file main js file of index
 * @author fantao fantao@baidu.com
 */

require(["config"],function() {
    require(["jquery", "react", "server", 
        "jsx!component/screencover",
        "jsx!component/setup.guide",
        "jsx!component/basebox",
        "jsx!component/panel.serverpath", 
        "jsx!component/panel.versionctrl",
        "jsx!component/panel.tplbrowser",
        "jsx!component/panel.experiment",
        "jsx!component/panel.stubconfig",
        "jsx!component/panel.preview",
        "jsx!component/editor",
        "jsx!component/logger"], 
    function($, React, server, 
        ScreenCover, 
        SetupGuide, 
        Basebox, 
        PanelServerPath, 
        PanelVersionCtrl,
        PanelTplBrowser,
        PanelExperiment,
        PanelStubConfig,
        PanelPreview,
        Editor,
        Logger) {
        
        /**
         * React Component Render
         * topBaseBox is main component of this system, it checks the username of developer, connects to the server
         * and shows the info of developer and server when connection is working properly
         */
        var topBaseBox = React.renderComponent(
            Basebox({
                onGetUserIniFaild: function() {
                    // user.ini not found
                    // show setup guide
                    setupGuide.layer().show();
                },
                onGetUserConfSuccess: function(data) {
                    //Panel_server_path.setState({apipath: this.state.apipath});
                },
                onNeedSetup: function(data) {
                    //serverPath.collapse("open");
                  
                },
                onGetUserConfFaild: function(message) {
                    //user's server has no conf file of paths
                    console.error("getServerInfo Faild: " + message);
                    bottomLogger.log(message);
                },
                onConnect: function(message) {
                    var me = this;
                    var apipath = me.state.apipath;
                    bottomLogger.log(message);
                    serverPath.getServerConf(apipath);
                    tplBrowser.init(function(mySelf) {
                        mySelf.collapse("open");
                    });
                    stubConfig.init();
                    editor.getServerConf(apipath);
                    experiment.setState({
                        apipath: apipath,
                        path: topBaseBox.state.pathdata.template + "conf/pc/experiments.conf.php",
                    });
                }
            }),
            $('#base')[0]);

        /**
         * React Component Render
         * bottomLogger displays and records status in bottom of page at a single line
         *
         * @type {ReactComponent}
         * @JSX {logger.jsx} 
         * @node {'#logger'} 
         */
        var bottomLogger = React.renderComponent(
            Logger({
                // event functions;
            }),
            $('#logger')[0]);

        /**
         * React Component Render
         * serverPath displays path config of server
         *
         * @type {ReactComponent}
         * @JSX {panel.serverpath.jsx} 
         * @node {'#server_path'} 
         */ 
        var serverPath = React.renderComponent(
            PanelServerPath({
              title: "Server Path",
              status: "closed",
              onCollapse: function(status) {
                  //console.info(status);
              }
            }),
            $('#server_path')[0]);

        /**
         * React Component Render
         * versionCtrl is used to switch template RB(SVN) or backup current templates in vuitemplates folder
         *
         * @type {ReactComponent}
         * @JSX {panel.versionctrl.jsx} 
         * @node {'#version_ctrl'} 
         */ 
        var versionCtrl = React.renderComponent(
            PanelVersionCtrl({
                title: "Version Control",
                status: "closed",
                children: "hahah",
                onCollapse: function(status) {
                  //console.info(status);
                },
                onBeforeRBChange: function(message) {
                bottomLogger.log(message);
                },
                onRBChanged: function(rb) {
                /*
                require(["layer"], function(layer) {
                    layer.alert("rb" + rb + "已切!", 9);
                });
                */
                },
                onRBChanging: function(message) {
                bottomLogger.log(message);
                }
            }),
            $('#version_ctrl')[0]);

        /**
         * React Component Render
         * tplBrowser is a explorer for DataSource/templates/widgets/files
         */
        var tplBrowser = React.renderComponent(
            PanelTplBrowser({
                title: "Template Browser",
                status: "closed",
                size: "8",
                data: ["1/","204/","213/","217/"],
                onCollapse: function(status) {
                  //console.info(status);
                },
                onStateChange: function(me) {

                },
                onSelected: function(me) {
                    bottomLogger.log("source:" + me.state.source + ",template:" + me.state.template + ",file" + me.state.file);
                    stubConfig.setState({
                        current: me.state.source,
                    });
                    if ( me.state.source && me.state.template && me.state.showType == "file") {
                        preview.setState({
                            host: server.getShowHost(),
                            source: me.state.source,
                            template: me.state.template,
                            show: 'show',
                        });
                      // 切换模板是否同步清除编辑器文件
                      //editor.edit("");
                    }

                    if ( me.state.file && me.state.type == "file") {
                        editor.edit(me.state.value);
                    }
                }
            }),
            $('#tpl_browser')[0]);

          
        /**
         * React Component Render
         * experiment is a viewer and editor for experiment.conf
         */
        var experiment = React.renderComponent(
            PanelExperiment({
                title: "Experiment",
                status: "closed",
            }),
            $('#experiment')[0]);


        /**
         * React Component Render
         * stubConfig makes the ad.conf edit visually
         */
        var stubConfig = React.renderComponent(
            PanelStubConfig({
                title: "Stub Config",
                status: "opened",
                onCollapse: function(status) {
                    //console.info(status);
                },
                onEditConf: function(confPath) {
                    editor.edit(confPath);
                },
                onInput: function(me) {
                    bottomLogger.log("");
                },
                onSaveSuccess: function() {
                    // 保存成功后触发（未生效前）
                },
                onRefreshed: function(info) {
                    alert(info?"done":"Faild");
                    preview.reload();
                },
                onRefreshFaild: function(info) {
                    alert(info);
                }
            }),
            $('#stubconfig')[0]);

        /**
         * React Component Render
         * preview shows the rendered html of template
         */
        var preview = React.renderComponent(
            PanelPreview({
                //title: "Template Preview",
                status: "opened",
                //height: "100px",
                //children: "",
                onCollapse: function(status) {
                    //console.info(status);
                }
            }),
            $('#preview')[0]);

        /**
         * React Component Render
         * editor can edit source code of selected file
         */
        var editor = React.renderComponent(
            Editor({
                title: "File Editor",
                status: "opened",
                //height: "100px",
                //children: "",
                onCollapse: function(status) {
                    //console.info(status);
                },
                onLoad: function() {
                    $("#mainarea").scrollTop($("#mainarea")[0].scrollHeight);
                },
                onSave: function(message) {
                server.cleanCache(function(message){
                    if(message == ""){
                        $("#refresh").removeAttr("disabled");
                        preview.reload();
                    }
                });

                }
                //api: topBaseBox.state.apipath,
            }),
             $('#editor')[0]);

        /**
         * React Component Render
         * screenCover is a globle component that stack up a half transparent cover onto the top level of screen 
         */
        var screenCover = React.renderComponent(
            ScreenCover({
              
            }),
            $('#global .screencover')[0]
        );

        /**
         * React Component Render
         * setupGuide is a guide for new user 
         */
        var setupGuide = React.renderComponent(
            SetupGuide({
                cover: screenCover,
                onApiConSuccess: function(data) {
                    bottomLogger.log(data);
                    //serverPath.setState({apipath: apipath});
                    //serverPath.setState({data: data});
                },
                onApiConFaild: function(message) {
                    alert("API连接错误，请检查配置再试：" + message);
                },
                onSetupFinished: function(thisState) {
                    bottomLogger.log(thisState);
                    topBaseBox.setState({
                        servername: "MySever01",
                        apipath: thisState.apipath,
                    },function() {
                        topBaseBox.handleConnect();
                        setupGuide.layer().hide();
                    });
                }
            }),
        $('#global .screenlayer')[0]);

        $(function() {
        // Dom ready entrance
            // Auto height adjustment
            function adjustSize() {
                var height = document.documentElement.clientHeight;
                $('#mainbar').css('height', (height - 25) + "px");
                $('#mainarea').css('height', (height - 25) + "px");

                // register the screenCover resize function
                screenCover.fitScreen();
                // register the screenLayer reposition function
                setupGuide.layer().countPos();
            }
            $(window).resize(adjustSize);

            adjustSize();
            // Todo
            //
        });// on domready

    });// requeir modules
});// require config