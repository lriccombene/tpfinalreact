import React from 'react'
import '../../style.css';
class Box2Components extends React.Component{
    render(){
        return (
            <div id="three-column" className="container">
                <div className="tbox1">
                    <div className="box-style box-style01">
                        <div className="content">
                            <div className="image"><img src="images/img04.jpg" width="324" height="200" alt=""/></div>
                            <h2>Fusce ultrices fringilla</h2>
                            <p>Aliquam erat volutpat. Pellentesque tristique ante ut risus. Quisque dictum. Integer nisl
                                risus, sagittis convallis, rutrum id, elementum congue, nibh. </p>
                            <a href="#" className="button">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="tbox2">
                    <div className="box-style box-style02">
                        <div className="content">
                            <div className="image"><img src="images/img05.jpg" width="324" height="200" alt=""/></div>
                            <h2>Mauris vulputate dolor</h2>
                            <p>Aliquam erat volutpat. Pellentesque tristique ante ut risus. Quisque dictum. Integer nisl
                                risus, sagittis convallis, rutrum id, elementum congue, nibh. </p>
                            <a href="#" className="button">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="tbox3">
                    <div className="box-style box-style03">
                        <div className="content">
                            <div className="image"><img src="images/img06.jpg" width="324" height="200" alt=""/></div>
                            <h2>Nulla luctus eleifend </h2>
                            <p>Aliquam erat volutpat. Pellentesque tristique ante ut risus. Quisque dictum. Integer nisl
                                risus, sagittis convallis, rutrum id, elementum congue, nibh.</p>
                            <a href="#" className="button">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Box2Components
