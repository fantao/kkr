define(['jquery', 'react'], function($, React) {
    var ScreenCover = React.createClass({
        getInitialState: function() {
            return {
                zIndex: 100,
                height: document.documentElement.clientHeight,
                display: '',
            };
        },
        componentDidUpdate: function() {
            //Set the initial status of component
            //Make the panel opened or closed async to Collapse's props
            //console.log("componentWillUpdate");
            var cover = this.refs.cover.getDOMNode();
            if (this.state.display) {
                $(cover)[ this.state.display ]('fast', function() {});
            }
            
        },
        fitScreen: function() {
            if (this.state.display == "show") {
                this.setState({
                    height: document.documentElement.clientHeight,
                });
            }
        },
        show: function(callback) {
            this.setState({
                display: 'show',
            },callback);
        },
        hide: function(callback) {
            this.setState({
                display: 'hide',
            },callback);
        },
        handleClick: function() {
            //this.hide();
        },
        render: function() {
            var style = {
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: this.state.height,
                zIndex: this.state.zIndex,
                background: this.props.color || '#000',
                opacity: this.props.opacity || '0.5',
                display: 'none',
            };

            return (
                <div ref="cover" onClick={this.handleClick} style={style}></div>
            );
        }
    });

    return ScreenCover;
});