import React, { Component } from "react";

class Nametag extends Component {
  render() {
    return (
      <div id="nametag">
        <div class="img">
          <img
            src="https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/36030300_961068927382962_4551596024342249472_n.jpg?_nc_cat=104&_nc_oc=AQnEXN0si8-pLOnTCf8yygPEfGzeh06e__N-xYTI83kgWx-mscnl0pfIWuX3LCp2y6A&_nc_ht=scontent-lht6-1.xx&oh=6481aef01c65a6ffb34f0cc797d9cc44&oe=5DF5D060"
            width="100px"
            height="100px"
            alt="Image of Adam"
          />
        </div>
        <div class="name-desc-wrap">
          <div class="name">Adam Roe</div>
          <div class="desc">
            A UCLAN graduate who likes to mess about with code
          </div>
        </div>
      </div>
    );
  }
}

export default Nametag;
