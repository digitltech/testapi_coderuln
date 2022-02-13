class Consumer extends React.Component{
  constructor(props){
    super(props);
    this.state = {cons:props.consumer};
    this.OnClick = this.OnClick.bind(this);
  }
  OnClick(e){
    this.props.OnRemove(this.state.cons);
  }
  render(){
    return<div>
      <p>{this.state.cons.ConsumerId}</p>
      <p>{this.state.cons.ElMetersId}</p>

    </div>;
  }
}

class ConsumerForm extends React.Component{
  constructor(props){
    super(props);
    this.state={ConsumerId:0,ElMetersId:0};
    this.OnSubmit = this.OnSubmit.bind(this);
    this.OnConsumerIdChange = this.OnConsumerIdChange.bind(this);
    this.OnElMetersIdChange = this.OnElMetersIdChange.bind(this);
  }

  OnConsumerIdChange(e){
    this.setState({ConsumerId:e.target.value});
  }

  OnElMetersIdChange(e){
    this.setState({ElMetersId:e.target.value});
  }
  OnSubmit(e){
    e.preventDefault();
    var _ConsumerId = this.state.ConsumerId;
    var _ElMetersId = this.state.ElMetersId;
    if (_ConsumerId<=0 || _ElMetersId<=0){
      return;
    }
    this.props.OnConsumerSubmit ({ConsumerId:_ConsumerId, ElMetersId:_ElMetersId});
    this.setState({ConsumerId:0,ElMetersId:0});
  }
  render(){
    return(
      <form onSubmit={this.onSubmit}>
      <p>
          <input type="text"
                 placeholder="Consumer"
                 value={this.state.ConsumerId}
                 onChange={this.OnConsumerIdChange} />
      </p>
    <p>
        <input type="number"
               placeholder="Elmet"
               value={this.state.ElMetersId}
               onChange={this.OnElMetersIdChange} />
    </p>
    <input type="submit" value="Сохранить" />
  </form>
    );
  }
}
class ConsumerList extends React.Component{
  constructor(props){
    super(props);
    this.state={consumers:[]};
    this.OnAddConsumer = this.OnAddConsumer.bind(this);
    this.OnRemoveConsumer = this.OnRemoveConsumer.bind(this);
  }

  loadData(){
    var xhr = new XMLHttpRequest();
    xhr.open("get",this.props.apiUrl,true);
    xhr.onload=function(){
      var data = JSON.parse(xhr.responseText);
      this.setState({consumers:data});
    }.bind(this);
    xhr.send();
  }
  componentDidMount(){
    this.loadData();
  }
  OnAddConsumer(consumer) {

  }

  OnRemoveConsumer(consumer){

  }
}
ReactDOM.render(
  <ConsumerList apiUrl="/api/Consumer"/>,
  document.getElementById("content")
 
);