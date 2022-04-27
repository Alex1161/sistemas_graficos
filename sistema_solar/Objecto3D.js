class Object3D {
    constructor(
        // posicion, 
        // rotacion, 
        // escala, 
        matrizModelado,
        object,
        // vertexBuffer=null, 
        // indexBuffer=null
    ){
        // this.vertexBuffer = vertexBuffer;
        // this.indexBuffer = indexBuffer;
        this.matrizModelado = matrizModelado;
        this.object = object;
        // this.posicion = posicion;
        // this.rotacion = rotacion;
        // this.escala = escala;
        this.hijos = [];
    }

    // actualizarMatrizModelado() {
    //     matrizModelado=mat4.create(); 
    //     mat4.translate(m1,m1,posicion);
    //     mat4.rotate(m1,m1,23*Math.PI/180,rotacion);
    //     mat4.scale(m1,m1,escala);
    // }

    dibujar(matPadre, funcionDibujado) {
        var m = mat4.create();
        // actualizarMatrizModelado();
        // concatenamos las transformaciones padre/hijo
        mat4.multiply(m, matPadre, this.matrizModelado);
        // if (vertexBuffer && indexBuffer){
        //     // dibujamos la malla de triángulos con WebGL
        //     // si el objeto tiene geometría asociada
        // }
        funcionDibujado(this.object, m);
        for (var i=0; i < this.hijos.length; i++) this.hijos[i].dibujar(m, funcionDibujado);
    }

    agregarHijo = function(h) {
        this.hijos.push(h);
    }

    quitarHijo = function(h) {
        
    }
}