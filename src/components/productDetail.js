import React from  'react'
import Axios from 'axios'
import {urlApi} from './../support/urlApi'
import {connect} from 'react-redux'


class ProductDetail extends React.Component {
    state ={product : {}}
    
    componentDidMount(){
        this.getDataApi()
    }
    
    getDataApi = () => {
        var idUrl = this.props.match.params.id
        Axios.get(urlApi+'/products/'+idUrl)
        .then((res) => {
            this.setState({product: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    proteksiJumlah = () => {
        if(this.refs.jumlah.value < 1){
            this.refs.jumlah.value = 1
        }
    }
    
    
    
    render(){
        var {nama, img, discount, deskripsi, harga} = this.state.product
        return (
            <div className ='container'>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card" style={{width: '100%'}}>
                            <img className="card-img-top" src={img} alt="Card cap" />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <h1 style={{color : '#4C4C4C'}}>{nama}</h1>
                        { discount > 0 ?
                            <div style={{backgroundColor:'#D50000', 
                                    width:"50px" , height:"22px" , 
                                    color:'white', textAlign:"center",
                                    display:'inline-block'}}>{discount}%</div> : null
                        }
                        { discount > 0 ? 
                            <span style={{fontSize:'12px', fontWeight:'600', color:'#606060' , 
                                        marginLeft:'10px', textDecoration:"line-through"}}>Rp. {harga}</span> : null}
                        
                        <div style={{fontSize:'24px', fontWeight : '700', 
                                    color:'#FF5722', marginTop:'20px'}}>Rp. {harga - (harga*(discount/100))} </div>

                        <div className="row">
                            <div className="col-md-2">
                                <div style={{marginTop:"10px" ,color:"#606060" , 
                                            fontWeight:"700", fontSize:"14px"}}>Jumlah</div>
                                <input type='number' ref='jumlah' className='form-control'  onChange={this.proteksiJumlah} style={{width : '60px' , 
                                            marginTop:'10px'}}/>
                            </div>
                            <div className="col-md-6">
                                <div style={{marginTop:"10px" ,color:"#606060" , 
                                            fontWeight:"700", fontSize:"14px"}}>Catatan untuk Penjual (Opsional)</div>
                                <input type='text' className='form-control' placeholder="Contoh: Warna putih, Ukuran XL, Edisi ke-2" 
                                        style={{marginTop:'13px'}}/>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-8">
                                <p style={{color:"#606060", fontStyle:"italic"}}>{deskripsi}</p> 
                            </div>
                        </div>

                        {this.props.username !== "" ?
                         <div className="row mt-4">
                            <input type='button' className='btn btn-outline-secondary col-md-2 ml-3' value='Add to Wishlist' />
                            <input type='button' className='btn btn-outline-danger col-md-3 ml-2' value='Buy Now'/>
                            <input type='button' className='btn btn-outline-success col-md-3 ml-2' value='Add to Cart' />
                        </div>
                        : 
                        <div className="row mt-4">
                            <input type='button' className='btn btn-outline-secondary col-md-2 ml-3' value='Add to Wishlist' disabled/>
                            <input type='button' className='btn btn-outline-danger col-md-3 ml-2' value='Buy Now' disabled/>
                            <input type='button' className='btn btn-outline-success col-md-3 ml-2' value='Add to Cart' disabled/>
                        </div>
                        }
                    </div>
                </div>
            </div>
        
        )
    }
}

const mapStateToProps = (state) => {
    return {
      username : state.user.username
    }
  }

export default connect(mapStateToProps)(ProductDetail);