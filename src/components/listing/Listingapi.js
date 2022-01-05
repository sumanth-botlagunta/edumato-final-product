import React,{ Component} from 'react'
import { Link} from 'react-router-dom'


class Listingapi extends Component {

    constructor(props) {
        super(props)
    }


    listing = (listdata) => {
        if(listdata){
			if(listdata.length > 0){

				return listdata.map((item)=>{
					return (
						<>
							<div className="list_container" key={item._id}>
								<Link to={`/details/${item.restaurant_id}`} style={{textDecoration: 'none', color: 'Red'}}>
									<div className="rest_name">{item.restaurant_name}</div>
								</Link>
								<div className="list_details" >
									<div className="rest_thumb">
										<img src={item.restaurant_thumb} alt="restuarant_thumbnail" />
									</div>
									<div className="list_details_text">
										<div className="cusines">
											<div className="btn btn-primary">{item.cuisines[0].cuisine_name}</div>
											<div className="btn btn-success">{item.cuisines[1].cuisine_name}</div>
										</div>
										<div className="rest_address btn-warning">
											{item.address}
										</div>
										<div className="rating">
											<div className="rating_num">
												{item.average_rating}
											</div>
											<div className="rate_text btn btn-dark">
												{item.rating_text}
											</div>
										</div>
										<div className="cost btn-danger">
											RS/-{item.cost}
										</div>
										<div className="contact btn-outline-secondary">
											{item.contact_number}
										</div>
									</div>
								</div>
							</div>
						</>
					);
				})
			}else{
                return(
                    <div>
                        <h2>No Data For this filter</h2>
                    </div>
                )
            }
        }
		
		else {
			return(
				<>
					<div className="loading_container">
					
						<img src="https://i.ibb.co/wYvB5M5/Spinner-1s-200px.gif" alt="Spinner-1s-200px" />
						
					</div>
				</>
			)
		}
    }

    render() {
        return (
            <>
              {this.listing(this.props.listdata)}
            </>
        )
    }
    
}

export default Listingapi
