/* Con esto, lo que conseguimos es que Webpack
todo lo que sea css tratalo como un módulo t ese módulo 
lo importas como una constante llamada styles*/

declare module '*css' {
    const styles: any;
    export = styles;
}