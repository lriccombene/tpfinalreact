import React, {useEffect, useState} from 'react'
import '../style.css';
import firebase from "firebase";

function AboutPage (){

    const [image,setImage] = useState([]);

    useEffect(
        () => {

            async function getImage  (e) {
                //const conte = useContext(NetContext);
                //this.state.context=conte;

                // console.log(this.props.product.images.filename)
                // console.log( this.props.product.images.filename )
                const ruta = '/utnimages/almacen.jpeg'
                const storageRef = firebase.storage().ref()

                storageRef.child(ruta).getDownloadURL()
                    .then((url) => {
                        // `url` is the download URL for 'images/stars.jpg'

                        // This can be downloaded directly:
                        var xhr = new XMLHttpRequest();
                        xhr.responseType = 'blob';
                        xhr.onload = (event) => {
                            var blob = xhr.response;
                        };
                        xhr.open('GET', url);
                        xhr.send();


                        // Or inserted into an <img> element
                        var img = document.getElementById('myimagen');
                        img.setAttribute('src', url);
                        setImage(url);

                    })
                    .catch((error) => {
                        // Handle any errors
                    });
            }
            getImage();
        }, []);


        return (
            <div id="wrapper">

                <div class="row justify-content-center"><h1>Somos un Almacen de barrio  atendido por sus due;o</h1></div>
                    <div class="row justify-content-center" ><h3>Estamos en el barrio como vecinos hace mas de 60 a;os</h3></div>
                <div className="row justify-content-center"><h3>Nos interesa que lleguen los productos mas frescos y de
                    calidad a nuestros clientes</h3></div>
                        <div class="row justify-content-center"><h3>somos fan de san lorenzo desde la cuna</h3></div>
                <div className="image row justify-content-center"><img id='myimagen' src={image} width="424" height="300" alt=""/></div>

            </div>
        )
    }



export default AboutPage
