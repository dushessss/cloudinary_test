import {Cloudinary} from "@cloudinary/url-gen";
import {fill} from "@cloudinary/url-gen/actions/resize";

const cld = new Cloudinary({cloud: {cloudName: 'dm6cepiri'}});

const myImage = cld.image('memes/itsfine');
myImage.resize(fill().width(250).height(250));
const imgElement = document.createElement('img');
document.body.appendChild(imgElement);
imgElement.src = myImage.toURL();