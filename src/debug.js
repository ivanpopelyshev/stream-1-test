import {GUI} from "dat.gui"

const dat = new GUI({name : "config", autoPlace : true,  closeOnTop:true})

document.body.appendChild(dat.domElement);