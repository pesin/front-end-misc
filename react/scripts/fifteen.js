/// <reference path="react/react-with-addons-0.13.1.js" />
/// <reference path="react/JSXTransformer-0.13.1.js" />

var data =
[[1, 12, 8, 3],
[5, 0, 2, 9],
[13, 6, 7, 10],
[14, 15, 4, 11]];

var GameCell = React.createClass({

 handleCellClick : function(){
    this.props.handleClick(this.props.cell, this.props.rowNum, this.props.cellNum);
    },


render: function (){
    var cell = this.props.cell;
    var strValue = cell.toString();
    var h=this.props.handleClick;
    
    if (cell==0){
        strValue = "";
       
    }

    
    var cx = React.addons.classSet;
    var classes = cx({
    'gameCell': true,
    'blankcell': (cell==0),
    
  });

   return (
   <div className={classes} onClick={this.handleCellClick} >{strValue}</div>
   );
}
});

var GameRow = React.createClass({
    
    
    render: function() {
   
        var row = this.props.row;
        var cells=[];
        var i=0;
        var p = this.props;
       var rowNum = this.props.rowNum;

        this.props.row.forEach(function(cell) {
          
            cells.push(<GameCell rowNum={rowNum} cellNum={i} cell={cell} key={i} handleClick={p.userInput} />);
            i++;
        });
        return (
            <div className="gameRow">
                {cells}
            </div>
        );
    }
});

var GameTable = React.createClass({
    
    handleClick : function(cell, rowNum, cellNum){
        alert(rowNum+","+cellNum);
        //calculate if the cell can be moved

        //move the cell

        //change state
        //2DO: perhaps the new state should be in this.state?
    },

    getInitialState: function() {
        return {
            gameState: [
            ]
        };
    },

    render: function() {
        var rows = [];
        
        var i=0;
        var tt = this.handleClick;
        this.props.data.forEach(function(r) {
          
            rows.push(<GameRow row={r} key={i} userInput={tt} t="1" rowNum={i}/>);
          i++;  
        });
        return (
        <div className="gameboard">
            {rows}
            </div>
        );
    }
});



React.render(<GameTable data={data} />, document.getElementById("container"));