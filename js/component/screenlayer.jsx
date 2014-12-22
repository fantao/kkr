define(['jquery', 'react'], function($, React) {
    var ScreenLayer = React.createClass({
        getInitialState: function() {
            return {
                top: '200',
                left: '200',
            };
        },

        componentDidUpdate: function() {
            //Set the initial status of component
            //Make the panel opened or closed async to Collapse's props
            //console.log("componentWillUpdate");
            var layer = this.refs.layer.getDOMNode();
            if (this.state.display) {
                $(layer)[ this.state.display ]('fast', function() {});
            }
            
        },
        countPos: function() {
            var width = this.props.width;
            var height = this.props.height;
            var top = (document.documentElement.clientHeight /2 - height /2) * 0.8;
            var left = document.documentElement.clientWidth /2 - width /2;
            this.setState({
                top: top,
                left: left,
            });
        },
        fitScreen: function() {
            if (this.state.display == "show") {
                this.setState({
                    height: document.documentElement.clientHeight,
                });
            }
        },
        show: function(callback) {
            var me = this;
            function doShow() {
                me.setState({
                    display: 'show',
                },callback);
            };
            if (me.props.cover) {
                me.props.cover.show(function() {
                    doShow();
                });
            } else {
                doShow();
            }
            
        },
        hide: function(callback) {
            this.setState({
                display: 'hide',
            },function() {
                if (this.props.cover) {
                        this.props.cover.hide(callback);
                } else {
                    if (callback) {
                        callback(); 
                    }
                }
            });
        },
        handleClick: function() {
            //this.hide();
            if(this.props.onClick) {
                this.props.onClick();
            }
        },
        render: function() {
            var style = {
                position: 'absolute',
                top: this.state.top,
                left: this.state.left,
                width: this.props.width || '500',
                height: this.props.height || '300',
                padding: '10px',
                display: 'none',
                background: '#333',
                borderRadius: '5px',
                boxShadow: '0 10px 30px #000',
                zIndex: 200,
            };
            return (
                <div ref='layer' onClick={this.handleClick} style={style} className={this.props.className}>
                    {this.props.children}
                </div>
            );
        }
    });

    return ScreenLayer;
});