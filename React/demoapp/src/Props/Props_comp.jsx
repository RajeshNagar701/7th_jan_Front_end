import React, { Component } from 'react'

function Props_comp({img,title,subtitle,desc}) {
  return (
    <div className='col-md-4'>
      <div className="card" style={{width:"200px"}}>
      <img src={img} width="100%" className="card-img-top" alt="..." />
          <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <h6 className="card-subtitle mb-2 text-muted ">{subtitle}</h6>
              <p className="card-text">{desc}</p>
          </div>
      </div>
    </div>
  )
}

/*
function Props_comp(props) {
  return (
    <div className='col-md-4'>
      <div className="card" style={{width:"200px"}}>
      <img src="https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" width="100%" className="card-img-top" alt="..." />
          <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted ">{props.subtitle}</h6>
              <p className="card-text">{props.desc}</p>
          </div>
      </div>
    </div>
  )
}
*/

/*
export class Props_comp extends Component {

  constructor(props)
  {
      super(props);
      this.props=props;
  }

  render() {
    return (
      
        <div className='col-md-4'>
          <div className="card" style={{width:"200px"}}>
          <img src="https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" width="100%" className="card-img-top" alt="..." />
              <div className="card-body">
                  <h5 className="card-title">{this.props.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted ">{this.props.subtitle}</h6>
                  <p className="card-text">{this.props.desc}</p>
              </div>
          </div>
        </div>
    )
  }
}
*/

export default Props_comp