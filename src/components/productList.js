import React from 'react'
import axios from 'axios'
import {urlApi} from './../support/urlApi'
import './../support/css/product.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import  {fnHitungCart} from './../1.actions'
import swal from 'sweetalert'

var quantity = 1
class ProductList extends React.Component{
    state = {listProduct : [] , cart : 0}

    componentDidMount(){
        this.getDataProduct()
    }

    getDataProduct = () => {
        axios.get( urlApi + '/products')
        .then((res) => this.setState({listProduct : res.data}))
        .catch((err)=> console.log(err))
    }
    
    onBtnCart = (val) => {
       axios.get( urlApi + '/products?id='+ val.id )
        .then((res) => {
            var username = this.props.username
            var userId = this.props.id
            var productId = res.data[0].id
            var namaProduk = res.data[0].nama
            var harga = res.data[0].harga
            var discount = res.data[0].discount
            var kategori = res.data[0].kategori
            var img = res.data[0].img
            var newData = {
                username, userId, productId, namaProduk, 
                harga, discount, kategori, img, quantity
            }
            axios.get(urlApi+'/cart?userId='+this.props.id+'&productId='+newData.productId)
                .then((res)=> {
                    console.log(res)
                    if(res.data.length > 0){
                        var username = this.props.username
                        var userId = this.props.id
                        var productId = newData.productId
                        var namaProduk = res.data[0].namaProduk
                        var harga = res.data[0].harga
                        var discount = res.data[0].discount
                        var kategori = res.data[0].kategori
                        var img = res.data[0].img
                        quantity = res.data[0].quantity+1
                        var editedData = {
                            username, userId, productId, namaProduk, 
                            harga, discount, kategori, img, quantity
                        }
                    axios.put(urlApi+'/cart/'+res.data[0].id, editedData)
                        .then((res) => {
                            console.log(res)
                            swal('Success', 'Item added to Cart', 'success')
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                    } else {
                        this.setState({cart : this.state.cart+1})
                        this.props.fnHitungCart(this.state.cart)
                        axios.post(urlApi + '/cart', {...newData, quantity : 1})
                        
                    .then((res) => {
                        console.log(res)
                        swal('Success', "Item added to Cart", 'success')
                        })
                    .catch((err) => {
                            console.log(err)
                        })
                }
                })
            })
            .catch((err) => console.log(err))
    }
       
     

    renderProdukJsx = () => {
        var jsx = this.state.listProduct.map((val) => {
                // if(val.nama.toLowerCase().startsWith(this.props.search.toLowerCase())){
                return <div className="card col-md-3" style={{width: '18rem', margin: '10px'}}>
                        <Link to={'/product-detail/'+val.id} ><img src={val.img} style={{width :'250px', height :'250px'}} className="card-img-top img" alt="Card cap" /></Link>
                        { val.discount > 0 ?
                        <div className="discount">{val.discount}%</div>
                         : null}
                        <div className="kategori mb-2">{val.kategori}</div>
                            <div className="card-body">
                                <h4>{val.nama}</h4>
                                { val.discount > 0 ?
                                <p className="card-text mr-5 " style={{textDecoration:'line-through', color:'red', display:'inline'}}>Rp. {val.harga}</p>
                                 : null
                                }
                                <p style={{display:'inline', fontWeight:'700'}}>Rp. {val.harga - (val.harga*(val.discount/100))}</p>
                                {this.props.username !== '' ? 
                                <input type='button' className="d-block btn btn-primary mt-2" value="Add to Cart" onClick={() => this.onBtnCart(val)}/> :
                                <Link to='/login'><input type='button' className="d-block btn btn-primary mt-2" value="Add to Cart"/></Link>
                            }      
                            </div>
                    </div>
            // } 
                
            
            
        })
        return jsx
    }

    render(){
        return (
        <div className="container">
            <div className="row justify-content-center">
            {this.renderProdukJsx()}
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        username : state.user.username,
        id : state.user.id,
        cart : state.cart.cart
    }
}

export default connect(mapStateToProps, {fnHitungCart})(ProductList)