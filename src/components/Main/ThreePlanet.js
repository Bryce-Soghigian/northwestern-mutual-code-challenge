import React,{useEffect} from 'react'
import {createBasicPlanet,galaxy_function} from 'react-planetary/index'
import * as THREE from 'three'
import "./Main.css"
export default function ThreePlanet(props) {
    useEffect( () => {

        //==========THREEJS Initalization===========
        let renderer = new THREE.WebGLRenderer();//Creating a renderer
        let scene = new THREE.Scene();//Inits a scene
        let camera_aspect = window.innerWidth/400;//width/height
        let cam = new THREE.PerspectiveCamera(45,camera_aspect,0.1,1500)
        let cam_rotation = 0
        let cam_rotation_speed = 0.001;
        let cam_auto_rotation = true;
        //==========Lights=============
        let light = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);
        light.color.setHSL(.6,.1,.6)
        light.groundColor.setHSL(.095,1,.75);
        light.position.set(0, 50 , 0)
        scene.add(light)
        let light_helper = new THREE.HemisphereLightHelper(light,10)
        scene.add(light_helper)


        //=========Texture Loader for loading images========
        let textureLoader = new THREE.TextureLoader();
      

        let texture_array = ['https://i.imgur.com/TjU19Pz.jpg',"https://i.imgur.com/UkLEysp.jpg",'https://i.imgur.com/AzMo9RH.jpg',"https://i.imgur.com/iUYEwOc.jpg","https://i.imgur.com/QxHasVS.jpg","https://i.imgur.com/tnBFfhT.jpg","https://i.imgur.com/xu5OXIB.jpg","https://i.imgur.com/qUzuQr6.jpg"]

            let exoplanet = createBasicPlanet({
                surface: {
                  size: props.state.pl_radj || .2,
                  material: {
                    bumpScale: 0.000,
                    specular: new THREE.Color("grey"),
                    shininess: 10
                  },
                  textures: {
                    map:
                    texture_array[4],
                    bumpMap:
                      ""
                  }
                }
              });
        

      



        //===========Galaxy==========
        galaxy_function(textureLoader,scene)

        //========Renderer config===============//
        renderer.setSize(window.innerWidth, 400);
        document.body.appendChild(renderer.domElement);
        cam.position.set(1,1,1)
        scene.add(cam)
        scene.add(exoplanet)
        window.addEventListener("resize", function() {
            cam.aspect = window.innerWidth / 400;
            cam.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, 400);
          });
        //==========Configuration of Exoplanet======
        exoplanet.receiveShadow = true;
        exoplanet.castShadow = true;
        exoplanet.getObjectByName("surface").geometry.center();


        //===========Animation Loop ==============//
        let animate = function() {
            exoplanet.getObjectByName("surface").rotation.y += (1 / 16) * 0.01;
            if (cam_auto_rotation) {
                cam_rotation += cam_rotation_speed
                cam.position.y = 0;
                cam.position.x = 2 * Math.sin(cam_rotation);
                cam.position.z = 2 * Math.cos(cam_rotation);
                cam.lookAt(exoplanet.position);
                requestAnimationFrame(animate)
                renderer.render(scene,cam)
              }
        }
        animate()
        //==========Cleanup our dom=============//
        return () => {
            document.body.removeChild( renderer.domElement );
        };
    },[props])
    return (
        <div id="exoplanet">
            
        </div>
    )
}
